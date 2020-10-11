import {combineReducers} from "redux";
import CourseReducer from "./course";
const RootReducer = combineReducers({
    coures : CourseReducer
});

export default RootReducer;