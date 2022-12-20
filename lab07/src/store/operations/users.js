import { addUsersAction } from "../reducers/users/usersReducer"

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = () => async (dispatch) => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        dispatch(addUsersAction(data))
    } catch (error) {
        console.log(error);
    }
};