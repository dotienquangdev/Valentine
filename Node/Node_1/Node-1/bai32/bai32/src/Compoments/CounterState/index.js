import { useReducer, useState } from "react";

const reducer = (state, action) => {
    //action UP,DOWN ,RESET

    switch (action) {
        case "UP":
            return state + 1;
            break;

        case "DOWN":
            return state - 1;
            break;

        case "RESET":
            return 0;
            break;

        default:
            return state;
    }

}

function CounterState() {
    const [counter, setCounter] = useState(0);
    const [counter1, dispatch] = useReducer(reducer, 0);

    return (
        <>
            <div>Kết quả:{counter}</div>

            <br></br>
            <button onClick={() => setCounter(counter + 1)}>Up</button>
            <button onClick={() => setCounter(counter - 1)}>Down</button>
            <button onClick={() => setCounter(0)}>Reset</button>

            <br></br>

            <div>Kết quả:{counter1}</div>

            <br></br>

            <button onClick={() => dispatch("UP")}>Up</button>
            <button onClick={() => dispatch("DOWN")}>Down</button>
            <button onClick={() => dispatch("RESET")}>Reset</button>

        </>
    )
}
export default CounterState;