import ProductList from "./productList";
import "./index.css"
import CreateProduct from "../CreateModal/CreateProduct";
import { useState } from "react";
function Product() {
    const [reload, setReloaf] = useState(false);
    const handleReload = () => {
        setReloaf(!reload);
    }
    return (
        <>
            <h2>Danh sách sản phẩm:</h2>
            <CreateProduct onReload={handleReload} />
            <ProductList reload={reload} />
        </>
    )
}
export default Product;