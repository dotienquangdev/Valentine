import { useEffect, useState } from "react";
// import { useState } from "react";
import 'react-loading-skeleton/dist/skeleton.css'
function ProductList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            fetch("http://localhost:3000/products")
                .then(res => res.json())
                .then(data => {
                    setData(data);
                })
        }
        fetchApi();
    }, []);

    console.log(data);

    return (
        <>
            <div className="product_list">
                {data.map(item => (
                    <div className=" product_item" key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <h4>{item.title}</h4>
                        <p>{item.price}$</p>
                        <p>{item.discountPercentage}%</p>
                    </div>
                ))}
            </div>
        </>
    )
}
export default ProductList;