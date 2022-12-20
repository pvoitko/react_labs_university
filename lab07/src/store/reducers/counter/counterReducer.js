import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 20,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increaseAction: (state, action) => {
            state.counter += Number(action.payload);
        },
        decreaseAction: (state, action) => {
            state.counter -= Number(action.payload);
        },
    },
})

export const { increaseAction, decreaseAction } = counterSlice.actions;
export default counterSlice.reducer;