import { useDispatch } from "react-redux";
import { deleteItem, updateQuantity } from "../../actions/cart";
import { useRef } from "react";

function CartItem(props) {

    const { item } = props;
    const inputRef = useRef();
    const dispatch = useDispatch();


    const handleUp = () => {
        dispatch(updateQuantity(item.id));
        inputRef.current.value = parseInt(inputRef.current.value) + 1;
    }
    const handleDown = () => {
        if (item.quantity > 0) {
            dispatch(updateQuantity(item.id, -1));
            inputRef.current.value = parseInt(inputRef.current.value) - 1;
        }
        if (item.quantity <= 0) {
            alert("Không có sản phẩm");
        }
    }
    const handleDelete = () => {
        dispatch(deleteItem(item.id));
    }
    return (
        <>
            <div className="cart_item" key={item.id}>
                <div className="cart_image">
                    <img src={item.info.thumbnail} alt={item.info.title} />
                </div>

                <div className="cart_content">
                    <div className="cart_title">
                        {item.info.title}
                    </div>
                    <div className="cart_price-new">
                        {(item.info.price - item.info.discountPercentage / 100 * item.info.price).toFixed(1)}$
                    </div>
                    <div className="cart_price-old">
                        {(item.info.price.toFixed(0))}$
                    </div>
                </div>

                <div className="cart_quantity">
                    <button onClick={handleDown}>-</button>
                    <input ref={inputRef} defaultValue={item.quantity}></input>
                    <button onClick={handleUp}>+</button>
                </div>
                <button onClick={handleDelete}>Xoa</button>
            </div>
        </>
    )
}
export default CartItem;