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
