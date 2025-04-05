import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        movies: [],
    },
    reducers: {
        addFavorite: (state, action) => {
            if (!state.movies.find((movie) => movie.id === action.payload.id)) {
                state.movies = state.movies.concat(action.payload);
            }
        },
        removeFavorite: (state, action) => {
            if (state.movies.find((movie) => movie.id === action.payload.id)) {
                state.movies = state.movies.filter((movie) => movie.id !== action.payload.id);
            }
        },
    },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
