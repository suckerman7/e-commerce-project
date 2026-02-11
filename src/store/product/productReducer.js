import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList: [],
    total: 0,
    limit: 25,
    offset: 0,
    filter: "",
    fetchState: "NOT_FETCHED", // NOT_FETCHED | FETCHING | FETCHED | FAILED
};

const productReducer = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProductList(state, action) {
            state.productList = action.payload;
        },
        setTotal(state, action) {
            state.total = action.payload;
        },
        setFetchState(state, action) {
            state.fetchState = action.payload;
        },
        setLimit(state, action) {
            state.limit = action.payload;
        },
        setOffset(state, action) {
            state.offset = action.payload;
        },
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
});

export const {
    setProductList, setTotal, setFetchState, setLimit, setOffset, setFilter
} = productReducer.actions;

export default productReducer.reducer;