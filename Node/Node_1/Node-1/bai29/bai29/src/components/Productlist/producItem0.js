// Cácch 2


import { productList } from "../../data/product";
import ProducItem from "./productItem";
function ProductItem0() {
    // console.log(1);
    console.log(productList);
    return (
        <>
            <div className="product_List">
                {productList.map((item, index) => (
                    <ProducItem item={item} key={item.id} />
                ))}

            </div>
        </>
    )
}
export default ProductItem0;