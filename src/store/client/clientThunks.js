import axios from "axios";
import { setRoles, setUser, logout } from "./clientReducer";

const instance = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
    timeout: 1000,
});

export const loginUser = (credentials, rememberMe) => async(dispatch) => {
    try {
        const res = await instance.post("/login", credentials);
        const { user, token } = res.data;

        dispatch(setUser(user));

        if (rememberMe) {
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
        }

        return user;
    } catch (err) {
        throw err.response?.data?.message || "Login failed";
    }
};

export const autoLogin = () => (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");

        if (token && user) {
            dispatch(setUser(JSON.parse(user)));
        }
    } catch (err) {
        console.error("Auto login failed", err);
    }
};

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(logout());
};

export const fetchRoles = () => async(dispatch) => {
    try {
        const res = await instance.get("/roles");
        dispatch(setRoles(res.data));
    } catch (err) {
        console.error("Failed to fetch roles", err);
    }
};

