
import { useRef, useState } from "react";
import "./style.css";
function UseRef() {
    const [counter, setCounter] = useState(0);
    const counterRef = useRef(0);
    const counterObj = {
        current: 0
    };

    const handClick = () => {
        setCounter(counter + 1);
        counterRef.current = counterRef.current + 1;
        counterObj.current = counterObj.current + 1;
    }
    console.log("counter: ", counter);
    console.log("counterRef: ", counterRef);
    console.log("counterObj: ", counterObj);
    console.log("--------------------------------------------");
    return (
        <>
            <button className="click" onClick={handClick}>Click</button>
        </>
    )
}
export default UseRef;