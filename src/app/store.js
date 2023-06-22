import { configureStore } from "@reduxjs/toolkit";
import basketReducer from '../features/slices/basketSlice'

export const store = configureStore({
    reducer: {
        basket: basketReducer
    },
});