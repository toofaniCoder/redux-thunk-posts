import PostReducer from "./postReducer";
import { combineReducers } from "redux";
import postReducer from "./postReducer";

export default combineReducers({
  post: postReducer,
});
