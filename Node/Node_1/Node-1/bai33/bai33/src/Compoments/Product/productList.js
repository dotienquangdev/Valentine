import { useEffect, useState } from "react";
import EditProduct from "../CreateModal/EditProduct";
import DeleteProduct from "../CreateModal/DeleteProducts";
import { getProductList } from "../../sevices/productsSevice";

function ProductList(props) {
    const { reload } = props;
    const [data, setData] = useState([]);
    const [editReload, setEditReload] = useState(false);

    const handleReload = () => {
        setEditReload(!editReload);
    }

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList();
            // fetch("https://dummyjson.com/products")
            setData(result.reverse());
            //     .then(res => res.json())
            // .then(data => {
            // })
        }
        fetchApi();
    }, [reload, editReload]);

    return (
        <>
            <div className="product_list">
                {data.map(item => (
                    <div className="product_item" key={item.id}>
                        <div className="product_image">
                            <img src={item.thumbnail} alt={item.title} />
                        </div>
                        <h4>{item.title}</h4>
                        <p>{item.price}$</p>
                        <p>{item.discountPercentage}%</p>

                        <div className="product_box">
                            <EditProduct item={item} onReload={handleReload} />
                            <DeleteProduct item={item} onReload={handleReload} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default ProductList;