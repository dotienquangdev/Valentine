import { useEffect, useState } from "react";
import { getProductList } from "../../sevices/productsSevice";
import "./style.scss"
import Product from "../../compoment/Product";
function Home() {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList();
            setProduct(result);
        }
        fetchApi();
    }, []);
    console.log(products)
    return (
        <>

            <h2>
                Danh sách sản phẩm
            </h2>

            <Product />
        </>
    )
}
export default Home;