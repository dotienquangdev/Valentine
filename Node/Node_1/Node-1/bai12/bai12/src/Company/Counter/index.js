// React.memo() nó sẽ không rednr lại component khi compoment đó không có gì thay đổi
// nó là Highrt Order Component (Thành phần bậc caoo hơn) được sử dụng để bocj các component
// cú pháp <
// import(memo) from "react"
// function Component() {
//   return (
//     <>
//     </>
//   )
// }
// export default memo(Component); >

// Ví dụ

import { useCallback, useState } from "react";
import Box from "../Box";


function Counter() {
    const [counter, setCounter] = useState(0);

    // const handleCounter = () => {
    //     setCounter(counter => counter + 1);
    // }
    const handleCounter = useCallback(() => {
        setCounter(counter => counter + 1);
    }, []);

    const handleReset = useCallback(() => {
        setCounter(0);
    }, []);
    return (
        <>
            <div>Ket qua: {counter}</div>
            <Box onCounter={handleCounter} onReset={handleReset} />


            {/* <Box /> */}
            {/* <button onClick={handleCounter}>Click</button> */}
        </>
    )
}
export default Counter;
// useCallback giúp tránh thực hiện lại một hàm không cần thiết
// Giúp tạo ra một vungc nhứo để lưu hàm callBack và chir tạo ra hàm callback mới khi dêpndencies thay đổi.
// Cú pháp : const functionName = useCallback (callback, dêpendency)
// Trong đó: callback :là một hàm được gọi lại, lần render đầu tiên luân chạy vào trong hàm này.
// dêpndency là sự phụ thuộc, khi dependency thay đổi thì useCallback mới tại ra một hàm mới.