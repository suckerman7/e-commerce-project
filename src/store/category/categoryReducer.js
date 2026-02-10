import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    fetchState: "NOT_FETCHED", // NOT_FETCHED | FETCHING | FETCHED | FAILED
};

const categoryReducer = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload;
        },
        setCategoryFetchState(state, action) {
            state.fetchState = action.payload;
        },
    },
});

export const {
    setCategories, setCategoryFetchState,
} = categoryReducer.actions;

export default categoryReducer.reducer;