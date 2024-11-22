import { useState } from "react";

function Lamp() {
    // let status = false;
    const [status, setState] = useState(false);

    const handleClick = () => {
        // status = !status;
        setState(!status);
    }
    console.log(status);

    // if (status === true) {
    //     status.className.add("white");
    // } else {
    //     status.className.reomeve("white")
    // }

    return (
        <>
            <button className="status" onClick={handleClick}>
                {status ? "Tắt đi" : "Bật lên"}
            </button>
            <div className="status">
                {status ? "Đèn đang bật" : "Đèn đang tắt"}
            </div>
            <div className="status">
                {status ? "" : "Đèn đang tắt"}
            </div>
        </>
    )
}
export default Lamp;