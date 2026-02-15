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
        addToCart(state, action) {
            const product = action.payload;

            const itemInCart = state.cart.find(
                item => item.product.id === product.id
            );

            if (itemInCart) {
                itemInCart.count += 1;
            } else {
                state.cart.push({
                    product,
                    count: 1,
                    checked: true,
                });
            }
        },

        removeFromCart(state, action) {
            const productId = action.payload;

            state.cart = state.cart.filter(
                item => item.product.id !== productId
            );
        },

        increaseCount(state, action) {
            const productId = action.payload;
            const item = state.cart.find(
                item => item.product.id === productId
            );
            if (item) item.count += 1;
        },

        decreaseCount(state, action) {
            const productId = action.payload;
            const item = state.cart.find(
                item => item.product.id === productId
            );
            if (item && item.count > 1) {
                item.count -= 1;
            }
        },

        toggleChecked(state, action) {
            const productId = action.payload;
            const item = state.cart.find(
                item => item.product.id === productId
            );
            if (item) {
                item.checked = !item.checked;
            }
        },

        clearCart(state) {
            state.cart = [];
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
    addToCart, removeFromCart, increaseCount, decreaseCount, toggleChecked, clearCart, setPayment, setAddress
} = cartReducer.actions;

export default cartReducer.reducer;