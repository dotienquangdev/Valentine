import { useEffect, useState } from "react";
import "./style.css"
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function ProductState() {


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
        fetchApi();


        setTimeout(() => {
            fetchApi();
        }, 5000);
    }, []);
    // console.log(products)
    // console.log(loading)

    return (
        <>
            {loading ? (
                <>
                    {/* Dang tai du lieu */}
                    {/* <Skeleton count={5} /> */}
                    <div className="product_list">
                        {[...Array(16)].map((_, index) => (
                            <div className="product_item" key={index}>
                                <Skeleton className="product_image" />

                                <div className="product">
                                    <Skeleton className="product_image-circle" />
                                    <Skeleton className="product_title" />
                                </div>
                            </div>
                        ))}

                    </div>
                </>
            ) : (
                <div className="product_list">
                    {products.map(item => (
                        <div className="product_item" key={item.id}>
                            <img className="product_image" src={item.thumbnail} alt={item.title}></img>

                            <div className="product">
                                <img className="product_image-circle" src={item.thumbnail} alt={item.title}></img>
                                <h3 className="product_title">  {item.title}</h3>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </>
    )
}
export default ProductState;