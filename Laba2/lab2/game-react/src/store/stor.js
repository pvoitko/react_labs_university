import { configureStore } from "@reduxjs/toolkit";
import numbersReducer from "./reducers/numbers/numbersReducer";

export const store = configureStore({
    reducer: {
        numbers: numbersReducer,
    },
})