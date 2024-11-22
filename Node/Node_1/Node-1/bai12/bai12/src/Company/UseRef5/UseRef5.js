import { useEffect, useRef, useState } from "react";

function UseRef5() {

    const [inputValue, setInputValue] = useState("");
    const counterRef = useRef(0);
    const inputRef = useRef();

    useEffect(() => {
        console.log(inputRef);
        inputRef.current.focus();
    }, [])

    const handleChange = (e) => {
        setInputValue(e.target.value);
        counterRef.current = counterRef.current + 1;
        inputRef.current = inputRef.current + 1;

    }
    console.log(counterRef.current);

    return (
        <>

            <br />
            <input ref={inputRef} value={inputValue}
                onChange={handleChange} />
            <br />
            <hr />

        </>
    )
}
export default UseRef5;