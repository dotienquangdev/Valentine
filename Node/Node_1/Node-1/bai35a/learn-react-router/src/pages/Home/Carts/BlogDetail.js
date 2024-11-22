import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetail() {
    const params = useParams();
    const [posts, setPost] = useState();

    useEffect(() => {
        fetch(`https://dummyjson.com/post/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setPost(data);
            })
    }, [])

    return (
        <>
            {posts && (
                <>
                    <h1>{posts.title}</h1>

                    <div>{posts.body}</div>
                </>
            )}
        </>
    )
}
export default BlogDetail;