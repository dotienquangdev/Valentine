import { useState } from "react";

// useState giups cập nhật lại trạng thái của dữ liệu(Hay cập nhật lại giá trị của dữ liệu)
// Khi dữ liệu thay đổi thì giao diện sẽ dược cập nhật lại theo dữ liệu mới
/*
    Ví dụ: 
        bật hoặc tắt bóng đèn
        trạng thái đã đăng nhập hoặc chưa đăng nhập vào tài khoản
        khi tăng số lượng sản phẩm thì tổng tiền được cập nhật lại
*/

function Lamp() {
    // let status = false;
    const [status, setState] = useState(false);


    const handlClick = () => {
        // status = !status;
        setState(!status);
    }
    var x = 8;
    if (x > 0) {
        var x = 4;
        x = 5;
        var x = 1;
    }
    console.log(x);
    x = 2;
    console.log(x);

    let z = 10;
    z = 22;
    console.log(z);

    const y = 10;

    console.log(y);
    console.log(status);
    return (
        <>
            <button onClick={handlClick}>{status ? "Bat len" : "Tat di"}</button>
            <div>
                {status ? "den  dang bat" : "Den dang tat"}
            </div>
        </>
    )
}
export default Lamp;