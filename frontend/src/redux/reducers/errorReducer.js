import { GET_ERRORS, CLEAR_ERRORS, SET_ERROR } from "../constants/actionTypes";

const initailState = {
  message: null,
  status: null,
};

export default (state = initailState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return state;
    case SET_ERROR:
      return { message: action.payload.error, status: action.payload.status };
    case CLEAR_ERRORS:
      state = initailState;
      return state;
    default:
      return state;
  }
};
