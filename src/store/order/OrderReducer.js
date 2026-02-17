import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as orderApi from '../../api/OrderService';

export const submitOrder = createAsyncThunk(
    "order/submit",
    async (data, { rejectWithValue }) => {
        try {
            const res = await orderApi.createOrder(data);
            return res.data;
        } catch (err) {
            return rejectWithValue(
                err.response?.data || "Sipariş oluşturulamadı"
            );
        }
    }
);

export const fetchOrders = createAsyncThunk(
    "order/fetchOrders",
    async (_, { rejectWithValue }) => {
        try {
            const res = await orderApi.getOrders();
            return res.data;
        } catch (err) {
            return rejectWithValue(
                err.response?.data || "Siparişler alınamadı."
            );
        }
    }
);

const OrderReducer = createSlice({
    name: "order",
    initialState: {
        listLoading: false,
        submitLoading: false,
        success: false,
        error: null,
        orders: []
    },
    reducers: {
        resetOrderState: (state) => {
            state.success = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.pending, (state) => {
                state.listLoading = true;
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.listLoading = false;
                state.orders = action.payload.orders ?? action.payload;
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.listLoading = false;
                state.error = action.payload;
            })
            .addCase(submitOrder.pending, (state) => {
                state.submitLoading = true;
                state.error = null;
            })
            .addCase(submitOrder.fulfilled, (state) => {
                state.submitLoading = false;
                state.success = true;
            })
            .addCase(submitOrder.rejected, (state, action) => {
                state.submitLoading = false;
                state.error = action.payload;
            });
    }
});

export const { resetOrderState } = OrderReducer.actions;
export default OrderReducer.reducer;