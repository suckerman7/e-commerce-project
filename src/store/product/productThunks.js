import axiosInstance from "../../services/axios";
import { setProductList, setTotal, setFetchState } from './productReducer';

export const fetchProducts = () => async (dispatch, getState) => {
    dispatch(setFetchState("FETCHING"));
    
    try {

        const { limit, offset, filter } = getState().product;

        const response = await axiosInstance.get("/products", {
            params: {
                limit,
                offset,
                filter,
            },
        });

        const { products, total } = response.data;

        dispatch(setProductList(products));
        dispatch(setTotal(total));
        dispatch(setFetchState("FETCHED"));
    } catch (err) {
        console.error("Product fetching error", err);
        dispatch(setFetchState("FAILED"));
    }
};