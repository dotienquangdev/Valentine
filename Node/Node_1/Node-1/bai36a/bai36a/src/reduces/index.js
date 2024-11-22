import { combineReducers } from "redux";
import cartReducer from "./cart";

export const allReducers = combineReducers({
    cartReducer,

});

export default allReducers;