import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { getListCategory } from '../../sevices/categoryService';
import { createProduct, fetchProducts } from '../../sevices/productsSevice';

function CreateProduct(props) {
    const { onReload } = props;
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({});
    const [dataCategory, setDataCategory] = useState([]);
    const [existingProducts, setExistingProducts] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getListCategory();
            setDataCategory(result);

            // Lấy danh sách sản phẩm hiện có để xác định ID mới
            const products = await fetchProducts();
            setExistingProducts(products);
        };
        fetchApi();
    }, []);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const categoryId = data.category?.toString();
        if (!categoryId || !dataCategory.some(c => c.id === categoryId)) {
            Swal.fire({
                width: "400px",
                height: "150px",
                icon: "error",
                title: "Danh mục không hợp lệ",
                showConfirmButton: true
            });
            return;
        }

        const highestId = existingProducts.reduce((max, product) => Math.max(max, parseInt(product.id, 10)), 0);
        const newId = (highestId + 1).toString();

        const newProduct = { ...data, id: newId, category: categoryId };

        console.log('New Product:', newProduct);

        const result = await createProduct(newProduct);

        if (result) {
            setShowModal(false);
            if (typeof onReload === 'function') {
                onReload();
            }
            Swal.fire({
                width: "400px",
                height: "150px",
                icon: "success",
                title: "Thêm sản phẩm thành công",
                showConfirmButton: false,
                timer: 3000
            });
        }
    };

    return (
        <>
            <button onClick={openModal}>+ Tạo sản phẩm mới</button>
            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
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
                                        <select name="category" onChange={handleChange} value={data.category || ''}>
                                            {dataCategory.map((category) => (
                                                <option key={category.id} value={category.id}>{category.name}</option>
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
    );
}

export default CreateProduct;