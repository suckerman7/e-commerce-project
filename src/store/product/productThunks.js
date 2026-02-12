import axiosInstance from "../../services/axios";
import { setProductList, setTotal, setFetchState } from './productReducer';

export const fetchProducts = () => async (dispatch, getState) => {
    dispatch(setFetchState("FETCHING"));
    
    try {

        const { limit, offset, categoryId, sort, filter, } = getState().product;

        const params = {
            limit,
            offset,
        };

        if (categoryId) params.category = categoryId;
        if (sort) params.sort = sort;
        if (filter) params.filter = filter;

        const response = await axiosInstance.get("/products", { params });

        const { products, total } = response.data;

        dispatch(setProductList(products));
        dispatch(setTotal(total));
        dispatch(setFetchState("FETCHED"));
    } catch (err) {
        console.error("Product fetching error", err);
        dispatch(setFetchState("FAILED"));
    }
};