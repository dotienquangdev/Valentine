import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GoBack from "../compoment/Goback";

function BlogDetail() {
    const params = useParams();
    const [post, setPost] = useState();

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setPost(data);
            })
    }, [])

    console.log(post);

    return (
        <>
            <GoBack />
            {post && (
                <>
                    <h1>
                        {post.title}
                    </h1>

                    <span>{post.body}</span>
                </>
            )}

        </>
    )
}

export default BlogDetail;