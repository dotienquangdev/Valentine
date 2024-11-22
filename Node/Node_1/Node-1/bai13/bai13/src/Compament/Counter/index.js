import { useState, useMemo } from "react";
import { pow } from "../helpers/pow";

function Counter() {
    const [counter, setCounter] = useState(0);

    const handleCounter = () => {
        setCounter(counter => counter + 1);
    };

    // const resultPow = pow();
    const resultPow = useMemo(() => {
        pow()
    }, []);


    return (
        <>
            <div>Ket qua: {counter}</div>
            <button onClick={handleCounter}>Counter</button>
            <div>{resultPow}</div>

        </>
    )
}
export default Counter;
/*
    useMemo  giúp tránh thực hiện lại 1 logic không cần thiết
    useMemo tạo ra mọt vùng nhớ để lưu trữ giá trị đầu ra và chỉ thị nhớ giá trị mới khi dêpndencies thay đổi
    cú pháp: const vảiableName = useMemo(callback, dependency);
    trong đó: callback: là 1 hàm được gọi lại,lần render đầu tiên luân chạy vào hàm này.
    dependency: là sự phụ thuộc,khi dependency thay đổi thì useMemo cập nhật lại giá trị.
    - Sự khác biệt giữa useCallback và useMemo:
        + useCallback lựu vảo bộ nhớ 1 hàm
        + useMemo lưu vào bố nhớ 1  gía trị
        
        */