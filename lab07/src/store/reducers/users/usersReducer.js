import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: []
}

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUserAction: (state, action) => {
      state.users = [...state.users, action.payload]
    },
    addUsersAction: (state, action) => {
      state.users = [...state.users, ...action.payload]
    },
    removeUserAction: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload)
    }
  },
})

export const { addUserAction, addUsersAction, removeUserAction } = usersSlice.actions;
export default usersSlice.reducer;