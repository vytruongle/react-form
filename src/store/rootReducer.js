import { combineReducers } from "redux";
import { FormReducer } from "../actions/FormReducer";

const rootReducer = combineReducers({
  FormReducer: FormReducer,
});

export { rootReducer };
