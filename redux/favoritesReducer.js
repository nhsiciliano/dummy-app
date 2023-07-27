import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorites: [],
    carting: [],
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeItem: (state, action) => {
            state.favorites = state.favorites.filter(item => item.id !== action.payload);
        },
        removeAll: (state) => {
            state.favorites = []
        },
        addToCart: (state, action) => {
            state.carting.push(action.payload);
        },
        removeProduct: (state) => {
            state.carting = []
        }
    },
});

export const { addToFavorites, removeItem, removeAll, addToCart, removeProduct } = favoritesSlice.actions;

export default favoritesSlice.reducer;