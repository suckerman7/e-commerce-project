import axiosInstance from "../../services/axios";
import { setRoles, setUser, logout } from "./clientReducer";
import {authStorage} from '../../utils/authStorage';

export const loginUser = (credentials, rememberMe) => async(dispatch) => {
    try {
        const res = await axiosInstance.post("/login", credentials);
        const { user, token } = res.data;

        dispatch(setUser(user));

        if (rememberMe) {
            authStorage.setAuth({ user, token });
        }

        return user;
    } catch (err) {
        const message = err.response?.data?.message || "Login failed";

        throw new Error(message);
    }
};

export const autoLogin = () => (dispatch) => {
    const { user, token } = authStorage.getAuth();

    try {
        if (user && token) {
            dispatch(setUser((user)));
        }
    } catch (err) {
        console.error("Auto login failed", err);
    }
};

export const logoutUser = () => (dispatch) => {

    authStorage.clearAuth();
    dispatch(logout());
};

export const fetchRoles = () => async(dispatch) => {
    try {
        const res = await axiosInstance.get("/roles");
        dispatch(setRoles(res.data));
    } catch (err) {
        console.error("Failed to fetch roles", err);
    }
};

