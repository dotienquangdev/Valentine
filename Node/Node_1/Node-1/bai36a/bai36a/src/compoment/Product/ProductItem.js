import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart";
// import Modal from 'react-modal';
import Swal from 'sweetalert2/dist/sweetalert2.js';
// import DeleteProduct from "./deleteProduct";
import 'sweetalert2/src/sweetalert2.scss';
import EditProduct from "../../CreateModal/EditProduct/EditProduct";
import { useState } from "react";
import DeleteProduct from "../../CreateModal/DaleteProduct/deleteProduct";

function ProductItem(props) {
    const { item } = props;
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer);
    const [editReload, setEditReload] = useState(false);

    const handleAddToCart = () => {
        if (cart.some(itemCart => itemCart.id === item.id)) {
            dispatch(updateQuantity(item.id));

            Swal.fire({
                width: "400px",
                height: "150px",
                icon: "success",
                title: "Thêm sản phẩm thành công",
                showConfirmButton: false,
                timer: 1000
            });
        } else {
            dispatch(addToCart(item.id, item));
        }
        console.log(cart);
    };
    const handleReload = () => {
        setEditReload(!editReload);

    }


    // Chuyển đổi giá trị sang số để đảm bảo `toFixed` hoạt động
    const discountPercentage = parseFloat(item.discountPercentage) || 0;
    const price = parseFloat(item.price) || 0;

    const newPrice = (price - discountPercentage / 100 * price).toFixed(1);
    const oldPrice = price.toFixed(0);

    return (
        <>
            <div className="product_item">
                <img className="product_img" src={item.thumbnail} alt={item.title} />
                <h3 className="product_title">{item.title}</h3>
                <div className="product_price-new">Giá mới: {newPrice}$</div>
                <div className="product_percent">Giảm Giá: {discountPercentage.toFixed(0)}%</div>
                <div className="product_price-old">Giá cũ: {oldPrice}$</div>
                <div className="product_button">
                    <button onClick={handleAddToCart}>+</button>
                    <EditProduct item={item} onReload={handleReload} />
                    <DeleteProduct item={item} onReload={handleReload} />
                </div>
            </div>
        </>
    );
}

export default ProductItem;

