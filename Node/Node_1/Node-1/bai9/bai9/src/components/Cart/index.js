import './cart.css';
import './cart.scss';
import { useState } from "react";
function Cart() {
    const unitPrice = 12000;
    const [quantity, setQuantity] = useState(0);
    const handleChange = (e => {
        const updateQuantity = parseInt(e.target.value);
        // console.log(updateQuantity);
        setQuantity(updateQuantity);
    })

    return (
        <>
            <table className="cart">
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>Giày thể thao nam cao cấp</td>
                        <td>
                            <input defaultValue={quantity} type="number"
                                min={0} onChange={handleChange} />
                        </td>
                        <td>{unitPrice}đ</td>
                        <td>{unitPrice * quantity}đ</td>
                    </tr>
                </thead>
            </table>
        </>
    );
}
export default Cart;