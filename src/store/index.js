import { configureStore } from "@reduxjs/toolkit";
import clientReducer from './client/clientReducer';
import productReducer from './product/productReducer';
import categoryReducer from './category/categoryReducer';
import cartReducer from './cart/cartReducer';
import addressReducer from "./address/addressReducer";
import cardReducer from './card/cardReducer';
import OrderReducer from './order/OrderReducer';

import { saveCartToStorage } from "../utils/cartStorage";

const store = configureStore({
    reducer: {
        client: clientReducer,
        product: productReducer,
        category: categoryReducer,
        cart: cartReducer,
        address: addressReducer,
        card: cardReducer,
        order: OrderReducer,
    },
    devTools: true,
});

store.subscribe(() => {
    const { cart } = store.getState().cart.cart;
    saveCartToStorage(cart);
});

export default store;