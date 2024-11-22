import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CartAll() {

    const [posts, setPorts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then(res => res.json())
            .then(data => {
                console.log(data.posts);
                setPorts(data.posts);
            })
    }, [])
    console.log(posts)
    return (
        <>
            <ul>
                {posts.map(item => (
                    <li key={item.id}>
                        <Link to={"/blog" + item.id}>
                            {item.title}
                            <div>{posts.body}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CartAll;