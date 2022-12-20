import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter/counterReducer";
import usersReducer from './reducers/users/usersReducer';
import lessonReducer from './reducers/lesson/lessonReducer';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
        lesson: lessonReducer,
    },
})