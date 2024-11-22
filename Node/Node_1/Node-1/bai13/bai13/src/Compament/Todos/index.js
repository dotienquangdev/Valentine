import { useEffect, useReducer, useRef } from "react";

// const [todos, dispatch] = useReducer(reducer, init);
const init = [
    {
        id: 1,
        content: "Thứ 2 học HTMl"
    },
    {
        id: 2,
        content: "Thứ 3 học CSS"
    },
    {
        id: 3,
        content: "Thứ 4 học JS"
    },
    {
        id: 4,
        content: "Thứ 5 học C#"
    }
];
const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {

        case "CREATE":
            return [
                ...state,
                {
                    id: Date.now(),
                    content: action.value
                }
            ];

        case "DELETE":
            const newState = state.filter(todo => todo.id !== action.id);
            console.log(newState);
            return newState;

        default:
            return state;

    }
}


function Todos() {
    const [todos, dispatch] = useReducer(reducer, init);
    console.log(todos);
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.elements.inputTodo.value);
        const value = e.target.elements.inputTodo.value;
        if (value) {
            dispatch({
                type: "CREATE",
                value: value
            });
            inputRef.current.value = "";
        }
    }
    console.log(todos);

    const handleDelete = (id) => {
        console.log(id);
        dispatch({
            type: "DELETE",
            id: id
        });
    }

    return (
        <>

            <form onSubmit={handleSubmit}>
                <input ref={inputRef} name="inputTodo" />
                <button>Them todo</button>
            </form>
            {todos.length > 0 && (
                <ul>
                    {todos.map(item => (
                        <li key={item.id}>
                            {item.content}
                            <button onClick={() => handleDelete(item.id)}>Xóa</button>
                        </li>
                    ))}
                </ul>
            )}

        </>
    )
}
export default Todos;