import { LOGIN, REGISTER } from "../constants/actionTypes";

const initailState = {
  isLoggedIn: false,
  username: null,
  token: null,
};

export default (state = initailState, action) => {
  switch (action.type) {
    case LOGIN:
      return state;
    case REGISTER:
      return state;
    default:
      return state;
  }
};
