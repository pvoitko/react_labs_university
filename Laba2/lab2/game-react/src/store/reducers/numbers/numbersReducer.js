import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numbers: [],
}

export const numbersSlice = createSlice({
    name: "numbers",
    initialState,
    reducers: {
        addNumbers: (state, action) => {
            state.numbers = [...state.numbers, action.payload];
        },
        clearNumbers: (state, action) => {
            state.numbers = [];
        },
    },
})

export const { addNumbers, clearNumbers } = numbersSlice.actions;
export default numbersSlice.reducer;