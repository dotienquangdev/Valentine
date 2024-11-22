import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { getListCategory } from '../../sevices/categoryService';
import { createProduct } from '../../sevices/productsSevice';

function CreateProduct(props) {
    const { onReload } = props;
    const [showModal, setShowModal] = useState(false);
    const [data, setDadta] = useState({});
    const [dataCategory, setDataCategory] = useState([]);


    useEffect(() => {
        const fetchApi = async () => {
            const result = await getListCategory();

            setDataCategory(result);
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
        // console.log(e.target.name); // console.log(e.target.value);
        const name = e.target.name;
        const value = e.target.value;
        setDadta({
            ...data,
            [name]: value
        });
    }// console.log(data);

    function openModal() {
        setShowModal(true);
    }
    function closeModal() {
        setShowModal(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await createProduct(data);

        if (result) {
            setShowModal(false);
            onReload();
            Swal.fire({
                // position: "top-end",
                width: "400px",
                height: "150px",
                icon: "success",
                title: "Thêm sản phẩm thành công",
                showConfirmButton: false,
                timer: 3000
            });
        }

    }

    const handlePice = (e) => {
        e.preventDefault();
        fetch("http://localhost:3002/products", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"      ///  JSON.stringify(data)   chuyể từ object sang json  // Note convẻr JSON.parse   chuyển từ json sang object
            },

            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {    // console.log(data)
                if (data) {
                    setShowModal(false);
                    onReload();
                    Swal.fire({
                        // position: "top-end",
                        width: "400px",
                        height: "150px",
                        icon: "success",
                        title: "Thêm sản phẩm thành công",
                        showConfirmButton: false,
                        timer: 3000
                    });
                }
            })
    }

    return (
        <>
            <button onClick={openModal}>+Tạo sản phẩm mới</button>
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
                                    <input type='text' name='title' onChange={handleChange}
                                        required />
                                </td>
                            </tr>

                            {dataCategory.length > 0 && (
                                <tr>
                                    <td>Danh mục</td>
                                    <td>
                                        <select name="category" onChange={handleChange}>
                                            {dataCategory.map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            )}

                            <tr>
                                <td>Giá</td>
                                <td>
                                    <input type='text' name='price' onChange={handleChange} required></input>
                                </td>
                            </tr>

                            <tr>
                                <td>Giảm Giá</td>
                                <td>
                                    <input type='text' name='discountPercentage' onChange={handleChange} required></input>
                                </td>
                            </tr>
                            <tr>
                                <td>Số lượng còn lại</td>
                                <td>
                                    <input type='text' name='stock' onChange={handleChange}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>Đường dẫn ảnh</td>
                                <td>
                                    <input type='text' name='thumbnail' onChange={handleChange} required></input>
                                </td>
                            </tr>
                            <tr>
                                <td>Xếp hạng</td>
                                <td>
                                    <input type='text' name='rating' onChange={handleChange} required></input>
                                </td>
                            </tr>
                            <tr>
                                <td>Mô tả</td>
                                <td>
                                    <textarea rows={4} type='text' name='description' onChange={handleChange}></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={closeModal}>Hủy</button>
                                </td>
                                <td>
                                    <button type='submit' value='Tạo mới' onClick={handlePice} >Tạo mới</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </Modal>
        </>
    )
}
export default CreateProduct;