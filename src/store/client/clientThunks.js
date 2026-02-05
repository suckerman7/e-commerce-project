import axios from "axios";
import { setRoles } from "./clientReducer";

export const fetchRoles = () => async(dispatch) => {
    try {
        const res = await axios.get(
            "https://workintech-fe-ecommerce.onrender.com/roles"
        );
        dispatch(setRoles(res.data));
    } catch (err) {
        console.error("Failed to fetch roles", err);
    }
};