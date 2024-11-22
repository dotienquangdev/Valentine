import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { deleteProduct } from '../../sevices/productsSevice';

function DeleteProduct(props) {
    const { item, onReload } = props;

    const deleteItem = async () => {
        const result = await deleteProduct(item.id);
        if (result) {
            onReload();
            Swal.fire(
                "Đã xóa!",
                "Bạn đã xóa thành công.",
                "success",
            )
            onReload();
        }
    }
    const handleDelete = () => {
        Swal.fire({
            title: "Bạn có muốn xóa không ?",
            text: "Nếu xóa thì sẽ không khôi phục được !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Xóa",
            cancelButtonText: "Hủy"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteItem();
            } else {
                onReload();
            }
        });


    }
    return (
        <>
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}
export default DeleteProduct;