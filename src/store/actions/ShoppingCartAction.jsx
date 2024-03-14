export const addToCart = (count, product) => {
  return {
    type: "ADD_TO_CART",
    payload: { count, product },
  };
};

export const removeFromCart = (productId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: { productId },
  };
};

export const updateCartItemCount = (productId, newCount) => {
  return {
    type: "UPDATE_CART_ITEM_COUNT",
    payload: { productId, newCount },
  };
};
export const updateCart = (cart) => {
  return {
    type: "UPDATE_CART",
    payload: { cart },
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

export const setPaymentInfo = (paymentInfo) => {
  return {
    type: "SET_PAYMENT_INFO",
    payload: paymentInfo,
  };
};

export const setAddressInfo = (addressInfo) => {
  return {
    type: "SET_ADDRESS_INFO",
    payload: addressInfo,
  };
};
