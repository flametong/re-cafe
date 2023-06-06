import { configureStore } from "@reduxjs/toolkit";
import basketReducer from '../features/restaurant/slices/basketSlice'

export const store = configureStore({
    reducer: {
        basket: basketReducer
    },
});