import { useEffect, useState } from "react";
import "./style.css"

function UseEffect4() {

    const [data, setData] = useState([]);
    const [tabActive, setTabActive] = useState("products");

    useEffect(() => {
        fetch(`https://dummyjson.com/${tabActive}`)
            .then(res => res.json())
            .then(data => {
                setData(data[tabActive]);
            })
    }, [tabActive])

    const handleChangeTab = (e) => {
        setTabActive(e);
    }
    console.log(data)
    return (
        <>
            <div className="tabs">

                <div className="tabs_item"
                    onClick={() => handleChangeTab("products")}>
                    Products
                </div>

                <div className="tabs_item"
                    onClick={() => handleChangeTab("users")}>
                    Users
                </div>

                <div className="tabs_item"
                    onClick={() => handleChangeTab("posts")}>
                    Posts
                </div>

                <div className="tabs_item"
                    onClick={() => handleChangeTab("comments")}>
                    Comments
                </div>

                <div className="tabs_item"
                    onClick={() => handleChangeTab("quotes")}>
                    Quote
                </div>

            </div>

            <div className="tabs_content">
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            {item.title || `${item.firsName} ${item.lastName}  ${item.body} ${item.quote}`}
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default UseEffect4;