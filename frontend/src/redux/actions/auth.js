import axios from "../../axios/axios";

export const login = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post("/auth/login", {
      email,
      password,
    });

    dispatch({ type: "LOGIN", payload: data });
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

export const register = (username, email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post("/auth/register", {
      username,
      email,
      password,
    });

    dispatch({ type: "REGISTER", payload: data });
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
