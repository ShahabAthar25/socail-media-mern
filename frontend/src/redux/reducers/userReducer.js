import {
  GET_CURRENT_USER,
  GET_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../constants/actionTypes";

const initailState = [];

export default (state = initailState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return {
        username: action.payload.username,
        image: action.payload.image,
        followers: action.payload.followers,
        followings: action.payload.followings,
      };
    case GET_USER:
      return state;
    case UPDATE_USER:
      return state;
    case DELETE_USER:
      return state;
    default:
      return state;
  }
};
