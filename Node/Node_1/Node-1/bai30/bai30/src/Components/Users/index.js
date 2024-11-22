import { useEffect, useState } from "react";
function User() {
    // const [user, setUser] = useState(1);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/carts")
            .then(res => res.json())
            .then(data => {
                setData(data.carts)
            })
    }, []);
    console.log(data);
    return (
        <>
            <div className="users_list">
                {(data || []).map(item => (
                    <div className="users_item" >
                        <span className="users_id">{item.id}</span>
                        {(item.products || [] || " ").map(items => {
                            <ul key={items.id}>
                                <li className="users_image" >
                                    <img src={items.thumbnail} alt={items.price} />
                                </li>
                                <li className="users_title">
                                    <span>{items.title}</span>
                                </li>

                            </ul>
                        })}
                        <ul><span>{item.total}</span></ul>
                    </div>
                ))}
            </div>
        </>
    )

}
export default User;