import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/operations/users";
import { decreaseAction, increaseAction } from "../store/reducers/counter/counterReducer";
import { addUserAction, removeUserAction } from "../store/reducers/users/usersReducer";
import { counterSelector, lessonSelector, usersSelector } from '../store/selectors/selectors';

const Lesson10 = () => {
    const dispatch = useDispatch();
    const counter = useSelector(counterSelector);
    const topic = useSelector(lessonSelector);
    const users = useSelector(usersSelector);

    const increase = () => {
        dispatch(increaseAction(10))
    }
    const decrease = () => {
        dispatch(decreaseAction(10))
    }

    const addUser = () => {
        const user = {
            name: `Petya ${Date.now()}`,
            id: Date.now()
        }
        dispatch(addUserAction(user));
    }

    const removeUser = (id) => {
        dispatch(removeUserAction(id));
    }

    return (
        <div>
            <div>
                Lesson: {topic}

                <br />
                Counter: {counter}
                <button onClick={increase}>Increase counter</button>
                <button onClick={decrease}>Decrease counter</button>
            </div>

            <div>
                <button onClick={addUser}>Add user</button>
                <button onClick={() => dispatch(fetchUsers())}>Add users from fakeAPI</button>

                {users.length ?
                    <div>
                        <h3>Users</h3>
                        {users.map(user =>
                            <div id={user.id} key={user.id} onClick={() => removeUser(user.id)}>{user.name}</div>)}
                    </div>
                    :
                    <div>Нікого немає вдома</div>
                }
            </div>
        </div>
    )
}
export { Lesson10 }