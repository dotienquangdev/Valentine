import { memo } from "react";
// import Counter from "../Counter";
function Box(props) {
    // console.log("Hi chao cau")
    const { onCounter, onReset } = props;

    const handleClick = () => {
        onCounter();
    }

    const handleReset = () => {
        onReset();
    }

    return (
        <>  <br></br>
            <button onClick={handleClick}>Counter</button>
            <button onClick={handleReset}>Reset</button>

        </>
    )
}
// export default Box;
export default memo(Box);