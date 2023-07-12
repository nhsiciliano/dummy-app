import { configureStore, createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addToFavorites } = favoritesSlice.actions;

const store = configureStore({
  reducer: {
    favorites: favoritesSlice.reducer,
  },
});

export default store;