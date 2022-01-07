import { combineReducers } from "redux";

import auth from "./authReducer";
import error from "./errorReducer";
import user from "./userReducer";
import posts from "./postReducer";

export default combineReducers({
  auth,
  error,
  user,
  posts,
});
