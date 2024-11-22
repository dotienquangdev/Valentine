/*
    usereducer
    useReducer giống như một phiên bản nang cao của useState
    useReducer được sử dụng trong trường hợp compoment có state phức tạp.
    Cú pháp: const[state,dispatch] = useReducer(reducer, initialState);
    Các bước sử dụng useReducer:
    B1: khởi tạo useReducer và xác định cá giá trị khởi tạo.
    B2: Xấy dựng hàm reducer(Như là 1 hàm chuyển đổi, đầu vảo là 2 tham số) gồm state và action, đầu ra là state - state mới
    B3: Xác định nhũng Action(Xác định những hành động sẽ sảy ra)
    B4: Sử dụng Dispatch để kích hoạt 1 action.
*/

import { useState } from "react";

function CounterState() {

    const [counter, setCounter] = useState(0);

    return (

        <>
            <div>Ket qua: {counter}</div>

            <button onClick={() => setCounter(counter + 1)}>Up</button>
            <button onClick={() => setCounter(counter - 1)}>Down</button>
            <button onClick={() => setCounter(0)}>Reset</button>
        </>

    )
}
export default CounterState;
