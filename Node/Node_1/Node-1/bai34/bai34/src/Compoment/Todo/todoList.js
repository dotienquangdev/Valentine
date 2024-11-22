import { useDispatch, useSelector } from "react-redux";
import "./todo.css"
import { completedTodo, deleteTodo, undoTodo } from "../action/todoAction";

function TodoList() {
    const todoList = useSelector(state => state.todosReducer);
    const dispatch = useDispatch();

    const handleCompleted = (id) => {
        dispatch(completedTodo(id));
        console.log(id);
    }
    const handleUndo = (id) => {
        dispatch(undoTodo(id));
    }
    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    console.log(todoList)
    // alert("hi chao cau")
    return (
        <>
            {todoList && (
                <div className="todoList">
                    {todoList.map(item => (
                        <li className="todo_item" key={item.id}>
                            <span className={
                                "todo_content" +
                                (item.completed && "todo_complete")
                            }>{item.content}</span>
                            {item.completed ? (
                                <button onClick={() => handleUndo(item.id)}>U</button>
                            ) : (
                                <button onClick={() => handleCompleted(item.id)}>V</button>
                            )}
                            <button onClick={() => handleDelete(item.id)}>X</button>

                        </li>
                    ))}
                </div>

            )}
        </>
    )
}

export default TodoList;