const initialState = {
  cart: [],
  payment: {},
  address: {},
};

const ShoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = {
        count: action.payload.count,
        product: action.payload.product,
      };
      return {
        ...state,
        cart: [...state.cart, newItem],
      };

    case "REMOVE_FROM_CART":
      const updatedCart = state.cart.filter(
        (item) => item.product.id !== action.payload.productId
      );
      return {
        ...state,
        cart: updatedCart,
      };

    case "UPDATE_CART_ITEM_COUNT":
      const updatedCartItems = state.cart.map((item) =>
        item.product.id === action.payload.productId
          ? { ...item, count: action.payload.newCount }
          : item
      );
      return {
        ...state,
        cart: updatedCartItems,
      };
    case "UPDATE_CART":
      return {
        ...state,
        cart: action.payload.cart,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "SET_PAYMENT_INFO":
      return {
        ...state,
        payment: action.payload,
      };

    case "SET_ADDRESS_INFO":
      return {
        ...state,
        address: action.payload,
      };

    default:
      return state;
  }
};

export default ShoppingCartReducer;
