import { useEffect, useState } from "react";
import "./todo.css"

function Todos() {
    const limit = 20;
    const [data, setData] = useState([]);
    const [pageActive, setPageActive] = useState(0);
    const [quantityPage, setQuantityPage] = useState(0);

    useEffect(() => {
        fetch(`https://dummyjson.com/todos?skip=${pageActive * limit}&limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                setData(data.todos)
                setQuantityPage(Math.ceil(data.total / limit));
            })
    }, [pageActive])
    console.log(data);

    const handleClichPagi = (e) => {
        setPageActive(e);
    }
    console.log(handleClichPagi)

    return (
        <>

            <ul className="pagination">

                {[...Array(quantityPage)].map((item, index) => (
                    <li className="paginations" onClick={() => handleClichPagi(index)}>{index + 1}</li>
                ))}

            </ul>


            <div className="todo">
                {data.map(item => (
                    <ul className="todos" key={item.id}>
                        <li className="todos_id">Id:{item.id}</li>
                        <li className="todos_todo">{item.todo}</li>
                        <li className="todos_userId">UserId:{item.userId}</li>
                    </ul>
                ))}
            </div>


        </>
    )
}
export default Todos;