import axios from "../../axios/axios";

export const getPosts = (token) => async (dispatch) => {
  try {
    const { data } = await axios.get("/posts", {
      headers: {
        Authorization: token,
      },
    });

    dispatch({ type: "GET_POSTS", payload: data.message });
    dispatch({ type: "CLEAR_ERRORS" });
  } catch (error) {
    dispatch({
      type: "SET_ERROR",
      payload: {
        error: error.response.data.error,
        status: error.response.status,
      },
    });
  }
};

export const createPost = (token, body, image) => async (dispatch) => {
  try {
    const { data } = await axios.post("/posts", {
      body,
      image,
    });

    dispatch({ type: "CREATE_POST", payload: data.message });
    dispatch({ type: "CLEAR_ERRORS" });
  } catch (error) {
    dispatch({
      type: "SET_ERROR",
      payload: {
        error: error.response.data.error,
        status: error.response.status,
      },
    });
  }
};
