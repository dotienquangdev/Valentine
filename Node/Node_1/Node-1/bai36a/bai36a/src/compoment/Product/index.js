import { useEffect, useState } from "react";
import { getProductList } from "../../sevices/productsSevice"
import "./style.scss"
import ProductItem from "./ProductItem";
import CreateProduct from "../../CreateModal/CreateProduct";

function Product() {
    const [products, setProduct] = useState([]);
    const [editReload, setEditReload] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList();
            setProduct(result);
        }
        fetchApi();
    }, []);
    console.log(products)


    const handleReload = () => {
        setEditReload(!editReload);
    }

    return (
        <>
            <div>
                hi chao cau
                {/* < CreateProduct /> */}
                <CreateProduct onReload={handleReload} />
                <div className="product">
                    {products.map(item => (
                        <ProductItem item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Product;
