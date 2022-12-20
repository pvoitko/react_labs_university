import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lesson: {
        lection: 10,
        topic: 'Redux Toolkit'
    },
}

export const lessonSlice = createSlice({
    name: "lesson",
    initialState,
})

export default lessonSlice.reducer;