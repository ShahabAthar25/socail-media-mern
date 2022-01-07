import { combineReducers } from "redux";

import auth from "./authReducer";
import error from "./errorReducer";
import user from "./userReducer";

export default combineReducers({
  auth,
  error,
  user,
});
