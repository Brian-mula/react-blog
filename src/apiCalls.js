export const LoginCall = (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = axios.post("/login", userCredentials);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
  }
};
