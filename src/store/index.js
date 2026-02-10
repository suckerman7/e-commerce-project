import { configureStore } from "@reduxjs/toolkit";
import clientReducer from './client/clientReducer';
import productReducer from './product/productReducer';
import categoryReducer from './category/categoryReducer';
import cartReducer from './cart/cartReducer';

const store = configureStore({
    reducer: {
        client: clientReducer,
        product: productReducer,
        category: categoryReducer,
        cart: cartReducer,
    },
    devTools: true,
});

export default store;