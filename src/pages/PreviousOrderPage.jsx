import axios from "axios";
import React, { useState, useEffect } from "react";
import cat from "../assets/catincart.jpg";
import { useHistory } from "react-router-dom";
const PreviousOrderPage = () => {
  const history = useHistory();
  const axiosInstance = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
  });
  const token = localStorage.getItem("token");
  const [orders, setOrders] = useState([]);
  const [allAddress, setAllAddress] = useState([]);
  const [allOrderedProducts, setAllOrderedProducts] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/order", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => setOrders(res.data.reverse()));

    axiosInstance
      .get("/user/address", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => setAllAddress(res.data));
  }, []);

  useEffect(() => {
    const fetchOrderedProducts = async () => {
      try {
        const products = [];
        for (const order of orders) {
          for (const product of order.products) {
            const response = await axiosInstance.get(
              `/products/${product.id}`,
              {
                headers: {
                  Authorization: token,
                },
              }
            );
            products.push(response.data);
          }
        }
        setAllOrderedProducts(products);
      } catch (error) {
        console.error("Error fetching ordered products:", error);
      }
    };

    fetchOrderedProducts();
  }, [orders]);

  const findAddress = (index) => {
    return allAddress[
      allAddress.findIndex((item) => item.id == orders[index]?.address_id)
    ];
  };
  console.log("Order:", orders[0]);
  return (
    <div className="custom-container">
      {orders.length > 0 ? (
        <div className="flex flex-col justify-center items-center gap-3 py-12">
          <h1 className="text-4xl text-center font-bold pb-3">
            Your Order is Completed!
          </h1>
          <div className="font-mont">
            <div className="flex gap-3 border-1 rounded-md p-3 border-primary-border-color">
              <div className="flex flex-col">
                <span className="font-semibold text-primary-color">
                  Order Date:
                </span>{" "}
                <span className="font-semibold text-primary-color">
                  Address Information:
                </span>{" "}
                <span className="font-semibold text-primary-color">
                  Total Price:
                </span>
              </div>
              <div className="flex flex-col font-semibold">
                {" "}
                <div>
                  {orders[0]?.order_date.slice(0, 10)} /{" "}
                  {orders[0]?.order_date.slice(11, 16)}
                </div>
                <span>{findAddress(0)?.address}</span>
                <span>{orders[0]?.price}$</span>
              </div>
            </div>
          </div>
          <div className="font-mont flex justify-center flex-wrap gap-3">
            {orders.length > 0 &&
              orders[0]?.products.map((product, index) => (
                <div
                  key={index}
                  className="flex w-1/2 flex-col md:flex-row justify-center items-center gap-3"
                >
                  <img
                    src={product.images?.[0]?.url}
                    className="w-48 object-cover rounded-md shadow-md"
                  />
                  <div className="w-full md:w-1/2">
                    <p className="text-dark-text-color font-bold">
                      {product.name}
                    </p>
                    <p className="text-muted-text-color font-semibold">
                      {product.description}
                    </p>
                    <p className="text-success-text-color font-semibold">
                      {product.price} $
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <img className="w-96" src={cat} alt="" />
          <button
            onClick={() => history.push("shopping")}
            className="w-96 font-mont font-bold text-center text-white bg-primary-bg  p-4 rounded-md"
          >
            No order here. Go Shopping!
          </button>
        </div>
      )}
    </div>
  );
};

export default PreviousOrderPage;
