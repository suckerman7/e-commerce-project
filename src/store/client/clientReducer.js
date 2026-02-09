import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthChecked: false,
    addressList: [],
    creditCards: [],
    roles: [],
    theme: "light",
    language: "tr",
}

const clientReducer = createSlice({
    name: "client",
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            state.isAuthChecked = true;
        },
        setRoles(state, action) {
            state.roles = action.payload;
        },
        setTheme(state, action) {
            state.theme = action.payload;
        },
        setLanguage(state, action) {
            state.language = action.payload;
        },
        logout(state) {
            state.user = null;
            state.isAuthChecked = true;
            state.roles = [];
            state.addressList = [];
            state.creditCards = [];
        }
    },
});

export const {
    setUser, setRoles, setTheme, setLanguage, logout
} = clientReducer.actions;

export default clientReducer.reducer;