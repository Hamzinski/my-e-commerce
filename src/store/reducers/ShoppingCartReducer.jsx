const initialState = {
  cart: [],
  payment: {},
  address: {},
  checkedCard: {},
  cards: [],
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
    case "REMOVE_ADDRESS":
      const updatedAddressList = state.address.filter(
        (item) => item.id !== action.payload.id
      );

      return { ...state, address: updatedAddressList };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
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
    case "TOGGLE_CHECK_ITEM":
      const toggledCart = state.cart.map((item) =>
        item.product.id === action.payload.productId
          ? { ...item, checked: action.payload.checked }
          : item
      );
      return {
        ...state,
        cart: toggledCart,
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
    case "ADD_CARDS":
      return { ...state, cards: [...state.cards, action.payload] };

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
    case "SET_ADDRESS":
      return { ...state, address: action.payload };

    default:
      return state;
    case "SET_SELECTED_CARD":
      return {
        ...state,
        checkedCard: action.payload,
      };
    case "UPDATE_ADDRESS":
      return {
        ...state,
        address: state.address.map((address) =>
          address.id === action.payload.id
            ? { ...address, ...action.payload }
            : address
        ),
      };
    case "REMOVE_CARDS":
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload),
      };
  }
};

export default ShoppingCartReducer;
