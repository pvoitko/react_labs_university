import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    counter: 20,
    lesson: {
        lection: 10,
        topic: 'Redux Toolkit'
    },
    users: []
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increaseAction: (state, action) => {
            return {...state, counter: state.counter + Number(action.payload)}
        },
        decreaseAction: (state, action) => {
            return {...state, counter: state.counter - Number(action.payload)}
        },
        addUserAction: (state, action) => {
            return {...state, users: [...state.users, action.payload]}
        },
        addUsersAction: (state, action) => {
            return {...state, users: [...state.users, ...action.payload]}
        },
        removeUserAction: (state, action) => {
            return {...state, users: state.users.filter(user => user.id !== action.payload)}
        }
    },
})

export const {increaseAction, decreaseAction, addUserAction, addUsersAction, removeUserAction} = counterSlice.actions;
export default counterSlice.reducer;