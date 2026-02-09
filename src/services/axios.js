import axios from 'axios';
import { authStorage } from "../utils/authStorage";

const axiosInstance = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
    timeout: 1000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const { token } = authStorage.getAuth();

        if (token) {
            config.headers.Authorization = token;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // store.dispatch(logout())
            // authStorage.clearAuth()
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;