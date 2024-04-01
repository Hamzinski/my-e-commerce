import axios from "axios";
import { toast } from "react-toastify";
const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});
export const addToCart = (count, product) => {
  return {
    type: "ADD_TO_CART",
    payload: { count, product },
  };
};
export const setCartListAction = (cartList, operation) => {
  return {
    type: operation === "decrement" ? "DECREMENT_CART_ITEM" : "SET_CART_LIST",
    payload: cartList,
  };
};
export const addCard = (card) => {
  return { type: "ADD_CARDS", payload: card };
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
export const toggleCheckItemAction = (productId, checked) => {
  return {
    type: "TOGGLE_CHECK_ITEM",
    payload: { productId, checked },
  };
};
export const setCheckedCard = (card) => {
  return { type: "SET_SELECTED_CARD", payload: card };
};
export const removeAddressAction = (address) => {
  return { type: "REMOVE_ADDRESS", payload: address };
};
export const setLoading = (loading) => {
  return { type: "SET_LOADING", payload: loading };
};
export const setAddress = (address) => {
  localStorage.setItem("address", JSON.stringify(address));
  return { type: "SET_ADDRESS", payload: address };
};

export const updateAddressAction = (address) => {
  localStorage.setItem("address", JSON.stringify(address));
  return { type: "UPDATE_ADDRESS", payload: address };
};
export const setAddressThunkAction = (formData) => (dispatch) => {
  const token = localStorage.getItem("token");
  axiosInstance
    .post("/user/address", formData, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      dispatch(setAddress(res.data));
      toast.success("Address added.");
      window.location.reload();
    })
    .catch((err) => console.log(err));
};
export const updateAddressThunkAction = (formData) => (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch(setLoading(true));

  console.log("Updating Address - formData:", formData);

  axiosInstance
    .put(`/user/address`, formData, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      console.log("Update Address Response:", res.data);
      dispatch(updateAddressAction(res.data));
      toast.success("Address updated.");
      dispatch(setLoading(false));
      window.location.reload();
    })
    .catch((err) => {
      console.error(err.response);
      toast.error("Error updating address.");
    });
};
export const removeAddressThunkAction = (id) => (dispatch) => {
  const token = localStorage.getItem("token");
  axiosInstance
    .delete("/user/address/" + id, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      dispatch(removeAddressAction(id));
      console.log(res.data);
      toast.success("Address deleted successfully");
      window.location.reload();
    })
    .catch((err) => {
      toast.error("Error deleting address");
      console.error(err);
    });
};

export const addCardsThunkAction = (formData) => (dispatch) => {
  const token = localStorage.getItem("token");
  axiosInstance
    .post("/user/card", formData, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      dispatch(addCard(res.data));
    });
};
export const updateCardThunkAction = (formData) => (dispatch) => {
  const token = localStorage.getItem("token");
  axiosInstance
    .put(`/user/card`, formData, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      console.log(res.data);
      toast.success("Card updated successfully");
    })
    .catch((err) => {
      console.error(err.response);
      toast.error("Error updating card");
    });
};
export const removeCardThunkAction = (id) => (dispatch) => {
  const token = localStorage.getItem("token");
  console.log("Removing card from DB:", id);

  axiosInstance
    .delete(`/user/card/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      console.log("Card successfully deleted:", res.data);
      dispatch({ type: "REMOVE_CARDS", payload: id });
      toast.success("Card deleted from the database.");
    })
    .catch((err) => {
      console.error("Error deleting card from the database:", err);
      toast.error("Error deleting card from the database. Please try again.");
    });
};
