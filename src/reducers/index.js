import TodoReducer from "./TodoReducer";
import FilterReducer from "./FilterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  TodoReducer,
  FilterReducer
});

export default rootReducer;
