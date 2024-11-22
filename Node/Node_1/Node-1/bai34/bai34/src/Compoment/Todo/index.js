import TodoInput from "./todiInput";
import TodoList from "./todoList";


function Todos() {

    return (

        <>
            <h2>Danh sách todos</h2>
            <div className="todo">
                <TodoInput />
                <TodoList />
            </div >

        </>
    )
}
export default Todos;