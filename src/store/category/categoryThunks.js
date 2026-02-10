import axiosInstance from '../../services/axios';

import { setCategories, setCategoryFetchState } from './categoryReducer';

export const fetchCategories = () => async (dispatch) => {
    dispatch(setCategoryFetchState("FETCHING"));

    try {
        const res = await axiosInstance.get("/categories");

        dispatch(setCategories(res.data));
        dispatch(setCategoryFetchState("FETCHED"));
    } catch (err) {
        console.error("Category fetching failed", err);
        dispatch(setCategoryFetchState("FAILED"));
    }
};



