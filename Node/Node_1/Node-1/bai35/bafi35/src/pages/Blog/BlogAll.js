import { useEffect, useState } from "react";
import "./Blogall.css"
import { Link } from "react-router-dom";
function BlogAll() {
    const [data, setData] = useState([]);
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then(res => res.json())
            .then(data => {
                setPosts(data.posts);
            })
    }, [])
    console.log(posts);
    return (
        <>
            <ul>
                hi chao cau
                {posts.map(item => (
                    <ul>
                        <Link to={"/blog/" + item.id}>
                            {item.title}
                        </Link>
                        <li className="box" key={item.id}>

                            <span className="box_id">{item.id}</span>
                            <h3 className="box_title">{item.title}</h3>
                            <div className="box_body">{item.body}</div>
                        </li>
                    </ul>
                ))}
            </ul>
        </>
    )
}
export default BlogAll;