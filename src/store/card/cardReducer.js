import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';;
import * as cardApi from "../../api/CardService";

export const fetchCards = createAsyncThunk(
    "card/fetch",
    async (_, { rejectWithValue }) => {
        try {
            const res = await cardApi.getCards();
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || "Kartlar alınamadı.");
        }
    }
);

export const addCard = createAsyncThunk(
    "card/add",
    async (data, { rejectWithValue }) => {
        try {
            const res = await cardApi.createCard(data);
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || "Kart eklenemedi.");
        }
    }
);

export const editCard = createAsyncThunk(
    "card/edit",
    async (data, { rejectWithValue }) => {
        try {
            const res = await cardApi.updateCard(data);
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || "Kart güncellenemedi");
        }
    }
);

export const removeCard = createAsyncThunk(
    "card/delete",
    async (id, { rejectWithValue }) => {
        try {
            await cardApi.deleteCard(id);
            return id;
        } catch (err) {
            return rejectWithValue(err.response?.data || "Kart silinemedi.");
        }
    }
);

const cardReducer = createSlice({
    name: "card",
    initialState: {
        list: [],
        selectedCardId: null,
        loading: false,
        error: null,
    },
    reducers: {
        selectCard(state, action) {
            state.selectedCardId = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCards.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCards.fulfilled, (state, action) => {
                state.loading = false;

                const cards = action.payload.cards ?? action.payload;

                state.list = cards;

                if (cards && cards.length > 0) {
                    state.selectedCardId = cards[0].id;
                }
            })
            .addCase(fetchCards.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(addCard.fulfilled, (state, action) => {
                state.list.push(action.payload);
                state.selectedCardId = action.payload.id;
            })

            .addCase(editCard.fulfilled, (state, action) => {
                const index = state.list.findIndex(
                    c => c.id === action.payload.id
                );
                if (index !== -1) {
                    state.list[index] = action.payload;
                }
            })

            .addCase(removeCard.fulfilled, (state, action) => {
                state.list = state.list.filter(c => c.id !== action.payload);

                if (state.selectedCardId === action.payload) {
                    state.selectedCardId = state.list.length ? state.list[0].id : null;
                }
            });

    },
});

export const { selectCard } = cardReducer.actions;
export default cardReducer.reducer;