const initialState = {
  user: {
    name: "",
    email: "",
    role_id: "3",
    store: {
      phone: "",
      name: "",
      tax_no: "",
      bank_account: "",
    },
  },
  isAuthenticated: false,
  loading: false,
  error: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null,
      };

    case "CLEAR_USER":
      return {
        ...state,
        user: initialState.user,
        isAuthenticated: false,
        loading: false,
        error: null,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default UserReducer;
