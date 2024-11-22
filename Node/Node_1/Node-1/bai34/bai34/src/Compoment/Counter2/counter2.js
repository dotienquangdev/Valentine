import { useDispatch, useSelector } from "react-redux";
import { down, up } from "../action";

function Counter2() {
    const counter2 = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();
    return (
        <>
            <h2>Counter:{counter2}</h2>
            <button onClick={() => dispatch(up(10))}>Up 10</button>
            <button onClick={() => dispatch(down(7))}>Down 7</button>
        </>
    )
}
export default Counter2;