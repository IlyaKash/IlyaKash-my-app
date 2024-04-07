import { combineReducers } from "redux";
import countReducer from "./reducer_1";
import changeColorReducer from "./reducer_2";
import feedbackReducer from "./reducer_feedbacks";

const rootReducer=combineReducers({
    counter: countReducer,
    change_color: changeColorReducer,
    feedback: feedbackReducer,

});

export default rootReducer;