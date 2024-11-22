import { combineReducers } from "redux";
import counterReducer from "./counter";
import todosReducer from "./todo";

export const allReducers = combineReducers({
    counterReducer,
    todosReducer

});

export default allReducers;