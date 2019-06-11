import { combineReducers } from "redux";
import calculatorReducer  from "./Reducer";

const rootReducer = combineReducers({
  calc : calculatorReducer
});

export default rootReducer;