import { productList } from "../../data/product";
function ProductList() {
    // console.log(1);
    console.log(productList);
    // Cách 1
    return (
        <>
            <div className="product_List">
                {productList.map((item, index) => (
                    <div className="product_item" key={item.id}>
                        <div className="product_id">{item.id}</div>
                        <img src={item.image} alt={item.name}></img>
                        <div className="product_name">{item.name}</div>
                        <div className="product_price">Giá: {item.price}</div>
                    </div>
                ))}

            </div >
        </>
    )
}
export default ProductList;