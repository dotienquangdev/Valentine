import { useState } from "react";
import "./style.css"
function Modal() {

	const [showModal, setShowModal] = useState(false);

	const handleShowModal = () => {
		setShowModal(true);
	}
	const handleCloseModal = () => {
		setShowModal(false);
	}
	return (
		<>
			<button onClick={handleShowModal}>Click</button>

			{showModal && (

				<div className="modal">
					<div className="modal_body">

						<div className="modal_close" onClick={handleCloseModal}>
							<button>Close</button>
						</div>

						<div className="modal_content">
							<input>Nội dung...</input>
						</div>
					</div>
				</div>

			)}
		</>
	)
}
export default Modal;