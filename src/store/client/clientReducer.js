import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
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
    },
});

export const {
    setUser, setRoles, setTheme, setLanguage
} = clientReducer.actions;

export default clientReducer.reducer;