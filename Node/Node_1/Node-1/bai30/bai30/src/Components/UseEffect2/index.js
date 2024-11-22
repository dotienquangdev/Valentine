import { useEffect, useState } from "react";
import "./style.css"
function UseEffect2() {
    const [data, setData] = useState([]);
    const [quantity, setQuantity] = useState(1);
    // console.log(data);
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                // console.log(data.products);
                setData(data.products)
            })
    }, [])
    console.log(data);
    const handleChange = (dulieu) => {
        // if (dulieu.id === products) {
        const updateQuantity = parseInt(dulieu.target.value);
        setQuantity(updateQuantity);
        console.log(updateQuantity);
        // }
    }
    return (
        <>
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
                            <div className="product_prices">{item.price} $</div>

                            <div className="product_quantity" key={item.id}>
                                <td>

                                    <input className="product_input" defaultValue={quantity} type="number" min={1} onChange={handleChange}>
                                    </input>
                                </td>
                            </div>
                        </div>
                        <div key={item.id}>Thành tiền: <span className="hi">{item.price * quantity}  $</span></div>
                    </div>
                ))}

            </div >
        </>
    )
}
export default UseEffect2;