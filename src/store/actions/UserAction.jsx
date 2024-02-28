import axios from "axios";
const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const clearUser = () => {
  return {
    type: "CLEAR_USER",
  };
};

export const setLoading = () => {
  return {
    type: "SET_LOADING",
  };
};

export const setError = (error) => {
  return {
    type: "SET_ERROR",
    payload: error,
  };
};

export const loginUser = (userData) => (dispatch) => {
  dispatch(setLoading());

  return new Promise((resolve, reject) => {
    instance
      .post("/login", userData)
      .then((res) => {
        const token = res.data.token;
        dispatch(setUser(res.data));
        localStorage.setItem("authToken", token);
        resolve(); // Resolve the promise on successful login
      })
      .catch((error) => {
        dispatch(setError(error.message || "An error occurred during login"));
        reject(error); // Reject the promise on login failure
      });
  });
};
