import { useRef, useState } from "react";

function UseRef2() {
    const [inputValue, setInputValue] = useState("");
    const counterRef = useRef(0);
    const [counter, setCounter] = useState(0);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        setCounter(counter + 1);
        counterRef.current = counterRef.current + 1;
    }
    console.log(counter)
    console.log(counterRef.current);

    return (
        <>  <br></br>
            <input value={inputValue} onChange={handleChange} placeholder="hi chao cau" />
        </>
    )
}
export default UseRef2;