import { useEffect, useState } from "react";
import "./style.css"
function UseEffect3() {
    const limit = 10;
    const [data, setData] = useState([]);

    const [quantity, setQuantity] = useState(0);

    const [pageActive, setPageActive] = useState(0);
    const [quantityPage, setQuantityPage] = useState(0);
    // console.log(data);


    useEffect(() => {
        fetch(`https://dummyjson.com/products?skip=${pageActive * limit}&limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.products);
                setData(data.products)
                // setQuantity(data.tota / limit)
                setQuantityPage(Math.ceil(data.total / limit));

            })
    }, [pageActive])
    console.log(data);
    console.log(setQuantity);
    console.log(quantityPage)


    const handleChange = (dulieu) => {
        // if (dulieu.id === products) {
        const updateQuantity = parseInt(dulieu.target.value);
        setQuantity(updateQuantity);
        console.log(updateQuantity);
        // }
    }

    const handleClickPagi = (e) => {
        setPageActive(e);
    }
    // console.log(...Array(quantityPage));

    return (
        <>

            <ul className="pagination">
                {[...Array(quantityPage)].map((item, index) => (
                    <li onClick={() => handleClickPagi(index)}>{index + 1}</li>
                ))}

            </ul >
            <div className="product_list">
                {data.map(item => (
                    <div className="product_item" key={item.id}>
                        <div className="product_image">
                            <img src={item.thumbnail} alt={item.price} />
                        </div>
                        <div className="product_title" key={item.id}>
                            {item.title}
                        </div>
                        <div className="product_price" key={item.id}>
                            <div className="product_prices">{item.price + 0.01} $</div>

                            <div className="product_quantity" key={item.id}>
                                <td>

                                    <input className="product_input" defaultValue={quantity} type="number" min={1} onChange={handleChange}>
                                    </input>
                                </td>
                            </div>
                        </div>
                        <div key={item.id}>Thành tiền: <span className="hi">{(item.price + 0.01) * quantity}  $</span></div>
                    </div>
                ))}

            </div >

        </>
    )
}
export default UseEffect3;