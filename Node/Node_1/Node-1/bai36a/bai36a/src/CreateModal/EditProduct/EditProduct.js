import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { getListCategory } from '../../sevices/categoryService';
import { editProduct } from '../../sevices/productsSevice';

function EditProduct(props) {
    const { item, onReload } = props;
    const [showModal, setShowModal] = useState(false);
    const [data, setDadta] = useState(item);
    const [dataCategory, setDataCategory] = useState([]);


    useEffect(() => {
        const fetchApi = async () => {
            const result = await getListCategory();
            setDataCategory(result);
            fetch("http://localhost:3002/category")
                .then(res => res.json())
                .then(data => {
                    setDataCategory(data);
                })
        }
        fetchApi();
    }, []);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            maginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDadta({
            ...data,
            [name]: value
        });
    }
    function openModal() {
        console.log(item);
        setShowModal(true);
    }
    function closeModal() {
        setShowModal(false)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await editProduct(item.id, data)
        if (result) {
            setShowModal(false);
            onReload();
            Swal.fire({
                // position: "top-end",
                width: "400px",
                height: "150px",
                icon: "success",
                title: "Cập nhật thành công",
                showConfirmButton: false,
                timer: 3000
            });
        }
    }
    return (
        <>
            <button onClick={openModal}>Chỉnh sửa</button>
            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"   >
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Tiêu đề</td>
                                <td>
                                    <input type='text' name='title' onChange={handleChange} required />
                                </td>
                            </tr>

                            <tr>
                                <td>Mô tả</td>
                                <td>
                                    <textarea rows={4} name='description' onChange={handleChange}></textarea>
                                </td>
                            </tr>

                            {dataCategory.length > 0 && (
                                <tr>
                                    <td>Danh mục</td>
                                    <td>
                                        <select name="category" onChange={handleChange}>
                                            {dataCategory.map((category, index) => (
                                                <option key={index} value={category.id}>{category.name}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            )}

                            <tr>
                                <td>Giá</td>
                                <td>
                                    <input type='text' name='price' onChange={handleChange} required />
                                </td>
                            </tr>

                            <tr>
                                <td>Giảm Giá</td>
                                <td>
                                    <input type='text' name='discountPercentage' onChange={handleChange} required />
                                </td>
                            </tr>

                            <tr>
                                <td>Xếp hạng</td>
                                <td>
                                    <input type='text' name='rating' onChange={handleChange} required />
                                </td>
                            </tr>

                            <tr>
                                <td>Số lượng còn lại</td>
                                <td>
                                    <input type='text' name='stock' onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>Đường dẫn ảnh</td>
                                <td>
                                    <input type='text' name='thumbnail' onChange={handleChange} required />
                                </td>
                            </tr>




                            <tr>
                                <td>
                                    <button type="button" onClick={closeModal}>Hủy</button>
                                </td>
                                <td>
                                    <button type='submit'>Tạo mới</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </Modal>
        </>
    )
}
export default EditProduct;