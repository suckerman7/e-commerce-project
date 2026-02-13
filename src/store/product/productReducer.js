import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList: [],
    total: 0,
    limit: 25,
    offset: 0,

    categoryId: null,
    sort: "",
    filter: "",

    fetchState: "NOT_FETCHED", // NOT_FETCHED | FETCHING | FETCHED | FAILED

    selectedDetail: null,
    detailFetchState: "NOT_FETCHED",
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
        setCategoryId(state, action) {
            state.categoryId = action.payload;
            state.offset = 0;
        },
        setSort(state, action) {
            state.sort = action.payload;
            state.offset = 0;
        },
        setFilter(state, action) {
            state.filter = action.payload;
            state.offset = 0;
        },
        setSelectedProduct(state, action) {
            state.selectedProduct = action.payload;
        },
        setDetailFetchState(state, action) {
            state.detailFetchState = action.payload;
        },
        clearSelectedProduct(state) {
            state.selectedProduct = null;
            state.detailFetchState = "NOT_FETCHED";
        },
    },
});

export const {
    setProductList, setTotal, setFetchState, setLimit, setOffset, setCategoryId, setSort, setFilter, setSelectedProduct, setDetailFetchState, clearSelectedProduct,
} = productReducer.actions;

export default productReducer.reducer;