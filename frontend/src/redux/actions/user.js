import axios from "../../axios/axios";

export const getCurrentUser = (token) => async (dispatch) => {
  try {
    const { data } = await axios.get("/users/me", {
      headers: {
        Authorization: token,
      },
    });

    dispatch({ type: "GET_CURRENT_USER", payload: data.message });
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
