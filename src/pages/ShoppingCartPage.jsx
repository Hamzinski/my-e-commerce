import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  faTruck,
  faTrashAlt,
  faChevronRight,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  updateCartItemCount,
  removeFromCart,
  toggleCheckItemAction,
} from "../store/actions/ShoppingCartAction.jsx";
import { ToastContainer, toast } from "react-toastify";
function ShoppingCartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.shoppingCart.cart);
  const [discountCode, setDiscountCode] = useState("");
  const [inputOpen, setInputOpen] = useState(false);
  const [discountApplied, setDiscountApplied] = useState(false);
  const handleChange = (event) => {
    setDiscountCode(event.target.value);
  };
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

  function totalPricefunc() {
    let totalPrice = 0;
    for (let item of cartItems) {
      if (item.checked) {
        totalPrice += item.count * item.product.price;
      }
    }

    return totalPrice;
  }

  function applyDiscount(totalPrice) {
    if (discountApplied) {
      return totalPrice > 100 ? totalPrice - 100 : 0;
    }
    return totalPrice < 150 && totalPrice > 0 ? totalPrice + 29 : totalPrice;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (discountCode.toLowerCase() === "hamza") {
      toast.success("İndirim uygulandı.");
      setDiscountApplied(true);
      setInputOpen(false);
    }
  };
  return (
    <div className="flex custom-container justify-between ">
      <div className="w-2/3">
        <ToastContainer />
        {cartItems.map((item, index) => {
          if (item.count > 0) {
            return (
              <div
                key={index}
                className="font-mont flex items-center gap-6 py-5 px-10 border-y-2 w-full"
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
                      <FontAwesomeIcon className="text-white" icon={faMinus} />
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
                      <FontAwesomeIcon className="text-white" icon={faPlus} />
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
      {cartItems.length > 0 ? (
        <div className="w-1/4 flex flex-col gap-2 p-3 border-y-2 font-mont">
          <div className="flex flex-col gap-2 ">
            <h1 className="pb-4 text-2xl">Sipariş Özeti</h1>
            <div className="flex justify-between">
              <p>Ürün Toplamı</p>
              <p>{toFixed2(totalPricefunc())} $</p>
            </div>
            <div className="flex justify-between">
              <p>Kargo Toplam</p>
              <p>{totalPricefunc() > 0 ? 29 : 0} $</p>
            </div>
            <div className="flex justify-between border-b-2 pb-2">
              <p>
                150 $ ve Üzeri <br /> Kargo Bedava(Satıcı Karşılar)
              </p>
              <p className="text-primary-color">
                -{totalPricefunc() > 149 ? 29 : 0}$
              </p>
            </div>
            <div className="flex justify-between">
              <p>Toplam</p>
              <p className="text-primary-color">
                {applyDiscount(parseFloat(totalPricefunc())).toFixed(2)} $
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setInputOpen(!inputOpen)}
              className="text-sm border-1 rounded-md py-2 px-5"
            >
              <FontAwesomeIcon className="text-primary-color" icon={faPlus} />{" "}
              {discountApplied ? "İNDİRİM KODU GİRiLDİ" : "İNDİRİM KODU GİR"}
            </button>
            {inputOpen && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input
                  onChange={handleChange}
                  value={discountCode}
                  type="text"
                  placeholder="İndirim Kodu"
                  className="pl-[35%] border-1 py-2"
                />
                <button
                  type="submit"
                  className="border-1 w-24 m-auto py-2 rounded-lg bg-primary-bg text-white"
                >
                  Submit
                </button>
              </form>
            )}
            <button
              onClick={() => history.push("#")}
              className="text-sm border-1 rounded-md py-2 px-5 bg-primary-bg text-white"
            >
              Sepeti Onayla <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      ) : (
        <h1 className="m-auto text-3xl bg-gray-300 shadow-2xl p-4 rounded-lg">
          Sepetinizde Ürün Yok!!
        </h1>
      )}
    </div>
  );
}

export default ShoppingCartPage;
