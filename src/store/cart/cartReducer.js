import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    payment: null,
    address: null,
};

const cartReducer = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart(state, action) {
            state.cart = action.payload;
        },
        setPayment(state, action) {
            state.payment = action.payload;
        },
        setAddress(state, action) {
            state.address = action.payload;
        },
    },
});

export const {
    setCart, setPayment, setAddress
} = cartReducer.actions;

export default cartReducer.reducer;