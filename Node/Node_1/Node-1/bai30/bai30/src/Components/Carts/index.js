import { useEffect, useState } from "react";
import "./style.css"

function Carts() {
    const limit = 15;
    const [data, setData] = useState([]);

    const [pageActive, setPageActive] = useState(0);
    const [quantityPage, setQuantityPage] = useState(0);

    useEffect(() => {
        fetch(`https://dummyjson.com/carts?skip=${pageActive * limit}&limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                setData(data.carts);
                // setQuantityPage(Math.ceil(data.total / limit));
            })
    }, [pageActive]);
    // const handleClichPagi = (e) => {
    //     setPageActive(e);
    // }
    return (
        <>
            {/* <ul className="pagination">
                {[...Array(quantityPage)].map((item, index) => (
                    <li className="paginations" onClick={handleClichPagi(index)}>{index + 1}</li>
                ))}
            </ul> */}

            <ul className="cart">
                {(data || []).map(item => (
                    <ul key={item.id} className="cart_item">
                        <li className="cart_id">Id: {item.id}</li>
                        {(item.products).map(itemPr => (
                            <ul key={itemPr.id} className="cart_Pr">
                                <li className="cart_PrId">Id(id):{itemPr.id}</li>
                                <li className="cart_PrImg"><img src={itemPr.thumbnail} alt={itemPr.id} /></li>
                                <li className="cart_Prtl" key={itemPr.id}>{itemPr.title}</li>
                                <li className="cart_PrPr">Price: {itemPr.price + 0.01} $</li>
                            </ul>
                        ))}

                    </ul>
                ))}
            </ul>
        </>
    )
}

export default Carts;