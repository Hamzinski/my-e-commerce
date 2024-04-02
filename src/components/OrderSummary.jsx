import { useEffect, useState } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  applyDissprice,
  clearCart,
  resetDiscount,
} from "../store/actions/ShoppingCartAction";
import axios from "axios";
export default function OrderSummary({ selectedAddress }) {
  const instance = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
  });
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.shoppingCart.cart);
  const checkedCard = useSelector((state) => state.shoppingCart.checkedCard);
  const discountApplied = useSelector(
    (state) => state.shoppingCart.isDiscountApplied
  );
  const toFixed2 = (number) => {
    return (Math.round(number * 100) / 100).toFixed(2);
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
      if (totalPrice < 150) {
        return Math.max(totalPrice - 100 + 29, 0);
      }
      return Math.max(totalPrice - 100, 0);
    }
    return Math.max(
      totalPrice < 150 && totalPrice > 0 ? totalPrice + 29 : totalPrice,
      0
    );
  }
  useEffect(() => {
    const discountAppliedFromStorage = localStorage.getItem("discountApplied");
    if (discountAppliedFromStorage === "true") {
      dispatch(applyDissprice());
    }
  }, []);
  const [isAgreed, setIsAgreed] = useState(false);
  const handleCheckboxChange2 = (event) => {
    setIsAgreed(event.target.checked);
  };
  const products = cartItems.map((item) => ({
    product_id: item.id,
    count: item.count,
    detail: item.name,
  }));
  const handlePayment = async () => {
    const t1 = applyDiscount(parseFloat(totalPricefunc())).toFixed(2);
    try {
      const orderData = {
        address_id: selectedAddress.id,
        order_date: new Date().toISOString(),
        card_no: checkedCard.card_no,
        card_name: checkedCard.name_on_card,
        card_expire_month: checkedCard.expire_month,
        card_expire_year: checkedCard.expire_year,
        card_ccv: 999,
        price: t1,
        products: [...products],
      };
      const response = await instance.post("/order", orderData, {
        headers: {
          Authorization: token,
        },
      });
      console.log("Order created successfully:", response.data);
      dispatch(resetDiscount());
      dispatch(clearCart());
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <div className="w-full flex flex-col gap-2 p-3 border-y-2 font-mont">
      <div className="flex flex-col gap-2 ">
        <h1 className="pb-4 text-2xl">Order Summary</h1>
        <div className="flex justify-between">
          <p>Product Total</p>
          <p>{toFixed2(totalPricefunc())} $</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping Total</p>
          <p>{totalPricefunc() > 0 ? 29 : 0} $</p>
        </div>
        <div className="flex justify-between border-b-2 pb-2">
          <p>
            $150 and Above <br /> Free Shipping (Seller Pays)
          </p>
          <p className="text-primary-color">
            -{totalPricefunc() > 149 ? 29 : 0}$
          </p>
        </div>
        <div className="flex justify-between">
          <p>Total</p>
          <p className="text-primary-color">
            {applyDiscount(parseFloat(totalPricefunc())).toFixed(2)} $
            {discountApplied && (
              <span className="ml-2 text-green-500">Discount Applied!</span>
            )}
          </p>
        </div>

        <div className="flex py-2 gap-1 items-center">
          <input
            type="checkbox"
            name=""
            id=""
            checked={isAgreed}
            onChange={handleCheckboxChange2}
          />
          <label className="text-sm">
            I have read and accept the {""}
            <span className="font-bold text-black underline cursor-pointer">
              Preliminary Information Conditions {""}
            </span>
            and{" "}
            <span className="font-bold text-black underline cursor-pointer">
              Distance Selling Agreement.
            </span>
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <button
          onClick={handlePayment}
          className={`text-sm font-bold border-1 rounded-md py-2 px-5 ${
            !isAgreed
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-primary-bg text-white"
          } `}
          disabled={!isAgreed}
        >
          Pay <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}
