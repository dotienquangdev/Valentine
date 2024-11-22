import { useEffect, useState } from "react";
import "./style.css";

function Comments1() {
    const limit = 15;
    const [data, setData] = useState([]);

    const [pageActive, setPageActive] = useState(0);
    const [quantityPage, setQuantityPage] = useState(0);

    useEffect(() => {
        fetch(`https://dummyjson.com/comments?skip=${pageActive * limit}&limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                setData(data.comments)
                setQuantityPage(Math.ceil(data.total / limit));
            })
    }, [pageActive]);
    const handleClichPagi = (e) => {
        setPageActive(e);
    }
    return (
        <>
            <ul className="pagination">
                {[...Array(quantityPage)].map((item, index) => (
                    <li className="paginations" onClick={() => handleClichPagi(index)}>{index + 1}</li>
                ))}
            </ul>

            <ul className="comment">
                {(data || []).map(item => (
                    <ul className="comments_item" key={item.id}>
                        <li className="comments_id s">{item.id}</li>
                        <li className="comments_body s">{item.body}</li>
                        <li className="comments_postId s">{item.postId}</li>
                        <li className="comments_likes s">{item.likes}</li>
                        <ul className="comments_user s">
                            <li className="a">{item.user.id}</li>
                            <li className="a">{item.user.username}</li>
                            <li className="a">{item.user.fullName}</li>
                        </ul>
                    </ul>
                ))}
            </ul>
        </>
    )
}
export default Comments1;