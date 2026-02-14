import axiosInstance from "../../services/axios";
import { setProductList, setTotal, setFetchState, setDetailFetchState, setSelectedProduct, clearSelectedProduct } from './productReducer';

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

export const fetchProductById = (productId) => async (dispatch) => {
    dispatch(setDetailFetchState("FETCHING"));

    try {
        const response = await axiosInstance.get(`/products/${productId}`);
        dispatch(setSelectedProduct(response.data));
        dispatch(setDetailFetchState("FETCHED"));
    } catch (err) {
        console.error("Product detail fetching error", err);
        dispatch(setDetailFetchState("FAILED"));
    }
};