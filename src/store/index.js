import { configureStore } from "@reduxjs/toolkit";
import clientReducer from './client/clientReducer';
import productReducer from './product/productReducer';
import categoryReducer from './category/categoryReducer';
import cartReducer from './cart/cartReducer';

import { saveCartToStorage } from "../utils/cartStorage";

const store = configureStore({
    reducer: {
        client: clientReducer,
        product: productReducer,
        category: categoryReducer,
        cart: cartReducer,
    },
    devTools: true,
});

store.subscribe(() => {
    const { cart } = store.getState().cart;
    saveCartToStorage(cart);
});

export default store;