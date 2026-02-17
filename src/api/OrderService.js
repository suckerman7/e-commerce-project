import axiosInstance from '../services/axios';

export const createOrder = (data) =>
    axiosInstance.post("/order", data);

export const getOrders = () =>
    axiosInstance.get("/order");