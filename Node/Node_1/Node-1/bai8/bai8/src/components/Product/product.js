import { productList } from "../../data/product"
import ProductItem from "./iteam";
function ProductList() {
    console.log(productList);

    return (
        <>
            <div className="product_List">
                {productList.map((item) => (
                    <ProductItem item={item} key={item.id} />
                ))}
            </div >
        </>
    )
}
export default ProductList;