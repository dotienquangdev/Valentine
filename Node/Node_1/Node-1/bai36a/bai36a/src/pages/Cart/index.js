import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import { deleteAll } from "../../actions/cart";

function Cart() {
    const cart = useSelector(state => state.cartReducer);

    const dispatch = useDispatch();
    const total = cart.reduce((sum, item) => {
        const priceNew = (item.info.price - item.info.discountPercentage / 100 * item.info.price);
        return sum + priceNew * item.quantity;
    }, 0)

    const handleDeleteAll = () => {
        dispatch(deleteAll());
    }


    return (
        <>
            <h2>Gio hang</h2>

            {cart.length > 0 ? (
                <>
                    <button onClick={handleDeleteAll}>Xoa tat ca</button>
                    <CartList />
                    <div className="cart_total">
                        Tổng tiền:<span>{total.toFixed(1)}$ </span>
                    </div></>
            ) : (
                <> Gio hang trong</>
            )}


        </>
    )
}
export default Cart;