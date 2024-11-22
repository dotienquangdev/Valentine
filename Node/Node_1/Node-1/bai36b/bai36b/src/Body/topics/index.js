import { useEffect, useState } from "react";
import "./style.css"

function Topics() {
    const [data, setData] = useState([]);
    // const [selectedAnswers, setSelectedAnswers] = useState({});

    useEffect(() => {
        const fetchApi = () => {
            fetch("http://localhost:3002/topics")
                .then(res => res.json())
                .then(data => {
                    setData(data);
                })
        };
        fetchApi();
    }, []);

    return (
        <>
            <h2>Danh sách các bài test:</h2>
            <ul className="topicsAll">
                {/* <div className="top_topics"> */}
                <li className="topics_item">HTML</li>
                <li className="topics_item">CSS</li>
                <li className="topics_item">JavaScripts</li>
                <li className="topics_item">ReactJS</li>
                <li className="topics_item">Java</li>
                {/* </div> */}
            </ul>

            <div className="topicsAll">
                {data.length > 0 && data.map(item => (
                    <div className="top_topics" key={item.id}>

                        <li className="topics_item">
                            <div>{item.id}:{item.name}</div>
                        </li>

                    </div>
                ))}
            </div>
        </>
    );
}

export default Topics;