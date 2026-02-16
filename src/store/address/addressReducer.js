import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as addressApi from '../../api/AddressService';

export const fetchAddresses = createAsyncThunk(
    "address/fetch",
    async () => {
        const res = await addressApi.getAddresses();
        return res.data;
    }
);

export const addAddress = createAsyncThunk(
    "address/add",
    async (data) => {
        const res = await addressApi.createAddress(data);
        return res.data;
    }
);

export const editAddress = createAsyncThunk(
    "address/edit",
    async (data) => {
        const res = await addressApi.updateAddress(data);
        return res.data;
    }
);

export const removeAddress = createAsyncThunk(
    "address/delete",
    async (id) => {
        await addressApi.deleteAddress(id);
        return id;
    }
);

const addressReducer = createSlice({
    name: "address",
    initialState: {
        list: [],
        selectedAddressId: null,
        loading: false,
    },
    reducers: {
        selectAddress(state, action) {
            state.selectedAddressId = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchAddresses.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(addAddress.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })
            .addCase(editAddress.fulfilled, (state, action) => {
                const index = state.list.findIndex(
                    a => a.id === action.payload.id
                );
                if (index !== -1) {
                    state.list[index] = action.payload;
                }
            })
            .addCase(removeAddress.fulfilled, (state, action) => {
                state.list = state.list.filter(
                    a => a.id !== action.payload
                );
            });
    }
});

export const { selectAddress } = addressReducer.actions;
export default addressReducer.reducer;