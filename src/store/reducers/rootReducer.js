import { combineReducers } from "redux";
import countReducer from "./reducer_1";
import changeColorReducer from "./reducer_2";

const rootReducer=combineReducers({
    counter: countReducer,
    change_color: changeColorReducer,

});

export default rootReducer;