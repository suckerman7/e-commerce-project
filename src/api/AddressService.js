import axiosInstance from "../services/axios";

export const getAddresses = () => 
    axiosInstance.get("/user/address");

export const createAddress = (data) =>
    axiosInstance.post("/user/address", data);

export const updateAddress = (data) =>
    axiosInstance.put("/user/address", data);

export const deleteAddress = (id) =>
    axiosInstance.delete(`/user/address/${id}`);