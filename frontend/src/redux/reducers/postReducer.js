import { GET_POSTS, GET_POST, CREATE_POST } from "../constants/actionTypes";

const initailState = [[]];

export default (state = initailState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return [action.payload];
    case CREATE_POST:
      return [...state, action.payload];
    case GET_POST:
      return state;
    default:
      return state;
  }
};
