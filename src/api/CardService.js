import axiosInstance from '../services/axios';

export const getCards = () =>
    axiosInstance.get("/user/card");

export const createCard = (data) =>
    axiosInstance.post("/user/card", data);

export const updateCard = (data) =>
    axiosInstance.put("/user/card", data);

export const deleteCard = (id) =>
    axiosInstance.delete(`/user/card/${id}`);

