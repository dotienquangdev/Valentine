import { useEffect, useState } from "react";
import "./style.css"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function ProducState() {

    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchApi = () => {

            fetch("https://dummyjson.com/products")
                .then(res => res.json())
                .then(data => {
                    setProducts(data.products);
                    setLoading(false);
                })

        }
        setTimeout(() => {
            fetchApi();
        }, 3000);
    }, []);
    console.log(products);
    console.log(loading);
    return (
        <>
            {loading ? (
                <>
                    <div className="product_list">
                        {[...Array(8)].map((item, index) => (
                            <div className="product_item" key={index}>
                                <Skeleton className="product_image" />
                                <Skeleton className="product_title" />
                                <Skeleton className="product_image-circle" />
                                <Skeleton className="product_title_p" />
                                <Skeleton className="product_money" />
                                <Skeleton className="product_money_stock" />
                                <Skeleton className="product_money_price" />

                            </div>
                        ))}

                    </div>
                </>
            ) : (
                <div className="product_list">
                    {products.map(item => (
                        <div className="product_item" key={item.id}>
                            <img className="product_image" src={item.thumbnail} alt={item.title} />
                            <h3 className="product_title">
                                <img className="product_image-circle product_title_img" src={item.thumbnail} alt={item.title} />
                                <p className="product_title_p">{item.title}</p>

                            </h3>
                            <span className="product_money">
                                <p className="product_money_price">Giá: {item.price}$</p>
                                <p className="product_money_stock">Số lượng: {item.stock}</p>
                            </span>

                        </div>
                    ))}
                </div>
            )}
        </>
    )
}
export default ProducState;