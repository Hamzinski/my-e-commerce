import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faTruck, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  updateCartItemCount,
  removeFromCart,
  toggleCheckItemAction,
} from "../store/actions/ShoppingCartAction.jsx";
function ShoppingCartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.shoppingCart.cart);
  const toFixed2 = (number) => {
    return (Math.round(number * 100) / 100).toFixed(2);
  };
  const handleUpdateItemCount = (productId, newCount) => {
    const existingItem = cartItems.find(
      (item) => item.product.id === productId
    );
    if (existingItem) {
      if (newCount <= 0) {
        dispatch(removeFromCart(productId));
      } else {
        dispatch(updateCartItemCount(productId, newCount));
      }
    } else {
      dispatch(updateCartItemCount(productId, newCount));
    }
  };
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };
  const toggleCheckbox = (productId, checked) => {
    dispatch(toggleCheckItemAction(productId, checked));
  };

  return (
    <div>
      <div>
        {cartItems.map((item, index) => {
          console.log(cartItems);
          if (item.count > 0) {
            return (
              <div
                key={index}
                className="custom-container font-mont flex items-center gap-6 py-5 px-10 border-y-2 w-full"
              >
                <input
                  className="w-5 h-5"
                  type="checkbox"
                  defaultChecked={item.checked}
                  onClick={() => toggleCheckbox(item.product.id, !item.checked)}
                />
                <img
                  className="w-[9rem] h-[12rem] shadow-md rounded-md"
                  src={item.product.images[0].url}
                  alt=""
                />
                <div className="flex flex-col gap-3 w-1/2">
                  <h1 className="text-dark-text-color font-bold">
                    {item.product.name}
                  </h1>
                  <h2 className="text-muted-text-color ">
                    {item.product.description}
                  </h2>
                  <span>Beden : 38</span>
                  <span>Adet : {item.count}</span>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      className="text-success-text-color"
                      icon={faTruck}
                    />
                    <p className="text-second-text-color">
                      <span className="font-bold text-dark-text-color">
                        39 dk içinde
                      </span>{" "}
                      sipariş verirsen{" "}
                      <span className="font-bold text-dark-text-color">
                        en geç yarın
                      </span>{" "}
                      kargoda!
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-12 w-1/4">
                  <div className="flex items-center ">
                    <button
                      className="bg-primary-bg w-12 h-12 text-white rounded-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUpdateItemCount(item.product.id, item.count - 1);
                      }}
                    >
                      -
                    </button>
                    <span className="w-12 h-12 border-y-2 px-2 py-2 text-lg text-center">
                      {item.count}
                    </span>
                    <button
                      className="bg-primary-bg w-12 h-12 text-white rounded-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUpdateItemCount(item.product.id, item.count + 1);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <h1 className="text-xl font-bold text-success-text-color">
                    {toFixed2(item.product.price * item.count)}$
                  </h1>
                  <FontAwesomeIcon
                    className="w-5 h-5 text-primary-color cursor-pointer"
                    icon={faTrashAlt}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFromCart(item.product.id);
                    }}
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default ShoppingCartPage;
