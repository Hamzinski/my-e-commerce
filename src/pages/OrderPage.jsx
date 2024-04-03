import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  faInfo,
  faPhone,
  faPlus,
  faTrashAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddressModal from "../components/AddressModal.jsx";
import axios from "axios";
import {
  removeAddressThunkAction,
  setAddress,
  setLoading,
  addCardsThunkAction,
} from "../store/actions/ShoppingCartAction.jsx";
import CreditCard from "../components/CreditCard.jsx";
import OrderSummary from "../components/OrderSummary.jsx";

function OrderPage() {
  const [showThirdDiv, setShowThirdDiv] = useState(true);
  const [showFifthDiv, setShowFifthDiv] = useState(true);
  const [showFourthDiv, setShowFourthDiv] = useState(false);
  const [showSixthDiv, setShowSixthDiv] = useState(false);
  const [isPaymentOptionSelected, setIsPaymentOptionSelected] = useState(false);
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [cards, setCards] = useState([]);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const address = useSelector((state) => state.shoppingCart.address);
  const [selectedAddress, setSelectedAddress] = useState({});
  const instance = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
  });
  const toggleThirdDiv = () => {
    setShowThirdDiv(!showThirdDiv);
    setShowFifthDiv(!showFifthDiv);
    setShowFourthDiv(false);
    setShowSixthDiv(false);
    setIsPaymentOptionSelected(false);
  };

  const toggleFourthDiv = () => {
    setShowFourthDiv(!showFourthDiv);
    setShowSixthDiv(!showSixthDiv);
    setShowThirdDiv(false);
    setShowFifthDiv(false);
    setIsPaymentOptionSelected(true);
  };

  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(setLoading(true));
    instance
      .get("/user/address", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        dispatch(setAddress(res.data));
        dispatch(setLoading(false));
      });
  }, []);

  function removeAddress(id) {
    dispatch(removeAddressThunkAction(id));
    console.log(id);
  }

  function openEditModal(address) {
    setSelectedAddress(address);
    setModal(true);
  }
  const handleCheckboxChange = (checked, address) => {
    if (checked && address) {
      setSelectedAddress(address);
    } else {
      if (selectedAddress) {
        setSelectedAddress({});
      }
    }
  };
  const handleAddCard = (cardInfo) => {
    dispatch(addCardsThunkAction(cardInfo)).then(() => {
      instance
        .get("/user/card", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setCards(res.data);
          setIsAddingCard(false);
        })
        .catch((error) => {
          console.error("Error fetching updated cards data:", error);
        });
    });
  };
  const handleCloseModal = () => {
    setIsAddingCard(false);
  };
  return (
    <div className="custom-container flex flex-col md:flex-row mt-32 md:mt-0">
      <div className="w-full md:w-3/4">
        <div className="flex">
          {" "}
          <div
            className={`font-mont flex flex-col gap-2 border-b-2 py-3 w-3/4 px-3 border-primary-border-color cursor-pointer ${
              !isPaymentOptionSelected ? "bg-gray-200" : "bg-white"
            }`}
            onClick={toggleThirdDiv}
          >
            <h1 className="text-2xl text-primary-color">Address Info</h1>
            <p>
              {selectedAddress?.name} {selectedAddress?.surname}
            </p>
            <p>
              {selectedAddress?.address} {selectedAddress?.city}{" "}
              {selectedAddress?.district}
            </p>
          </div>
          <div
            className={`font-mont flex flex-col gap-2 border-b-2 py-3 w-3/4 px-3 border-primary-border-color cursor-pointer ${
              !isPaymentOptionSelected ? "bg-white" : "bg-gray-200"
            }`}
            onClick={toggleFourthDiv}
          >
            <h1 className="text-2xl text-primary-color font-mont">
              Payment Options
            </h1>
            <p>
              You can make your payment safely by{" "}
              <span className="font-bold text-black">Debit/Credit Card</span> or{" "}
              <span className="font-bold text-black">Shopping Credit.</span>{" "}
            </p>
          </div>
        </div>
        {showThirdDiv && (
          <div
            className={
              "font-mont w-full border-2 py-4 px-4 mt-3 flex gap-2 items-center"
            }
          >
            <FontAwesomeIcon
              className="rounded-full text-white border-1 h-6 w-20 md:w-6 bg-primary-bg"
              icon={faInfo}
            />
            <p>
              To make corporate invoiced purchases, "Send My Invoice to the Same
              Address" Uncheck "Send" and enter the corporate name registered as
              the billing address. Select your billing address.
            </p>
          </div>
        )}
        {showFifthDiv && (
          <div className="font-mont flex flex-col mt-3 border-2 py-3 px-6">
            <div className="flex justify-between items-center">
              <h1 className="text-xl">Delivery Address</h1>
              <div className="flex gap-1 ">
                <input type="checkbox" />
                <label htmlFor="">Send my invoice to the same address.</label>
              </div>
            </div>
            <div className="flex flex-col gap-2 py-4">
              <div
                className="flex flex-col items-center gap-2 border-1 rounded-md w-full md:w-1/2 justify-center py-5 hover:bg-gray-200 cursor-pointer"
                onClick={() => setModal(!modal)}
              >
                <FontAwesomeIcon
                  className="text-primary-color text-xl"
                  icon={faPlus}
                />
                <h1 className="text-lg">Add New Address</h1>
              </div>
              {true && (
                <AddressModal
                  modal={modal}
                  setModal={setModal}
                  address={selectedAddress}
                />
              )}
              <div className="font-mont flex flex-wrap">
                {address &&
                  address.length > 0 &&
                  address.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full md:w-1/2 flex flex-col p-1"
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex gap-2 ">
                            <input
                              type="checkbox"
                              checked={selectedAddress?.id === item.id}
                              onChange={(e) =>
                                handleCheckboxChange(e.target.checked, item)
                              }
                            />
                            <label className="font-bold" htmlFor="">
                              {item.title}
                            </label>
                          </div>
                          <p
                            onClick={() => openEditModal(item)}
                            className="text-sm font-bold underline cursor-pointer"
                          >
                            Edit
                          </p>
                        </div>
                        <div className="border-1 rounded-md flex flex-col gap-7 px-3 h-full py-3 justify-center">
                          <div className="flex justify-between">
                            <div className="flex gap-2 ">
                              <FontAwesomeIcon
                                className="text-primary-color"
                                icon={faUser}
                              />
                              <h2>
                                {item.name} {item.surname}
                              </h2>
                            </div>
                            <div className="flex gap-2 items-center">
                              <FontAwesomeIcon
                                className="text-primary-color"
                                icon={faPhone}
                              />

                              <h2 className="text-sm">{item.phone}</h2>
                            </div>
                          </div>
                          <div className="flex justify-between items-end">
                            <p>
                              {item.address}
                              <br />
                              {item.neighborhood} <br />
                              {item.city} {item.district}
                            </p>
                            <div>
                              <FontAwesomeIcon
                                onClick={() => removeAddress(item.id)}
                                className="text-primary-color rounded-full cursor-pointer"
                                icon={faTrashAlt}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
        {showFourthDiv && (
          <div
            className={
              "font-mont w-full border-2 py-4 px-4 mt-3 flex gap-2 items-center"
            }
          >
            <FontAwesomeIcon className="rounded-full text-white border-1 h-6 w-6 bg-primary-bg" />
            <input type="checkbox" defaultChecked={true} />
            <label htmlFor="">
              You chose to pay by card. Using Debit or Credit Card You can make
              your payment safely.
            </label>
          </div>
        )}
        {showSixthDiv && <CreditCard />}
        {isAddingCard && (
          <div className="">
            <div className="">
              <CardForm
                closeModal={handleCloseModal}
                handleAddCard={handleAddCard}
              />
            </div>
          </div>
        )}
      </div>
      <div className="w-full md:w-1/4">
        <OrderSummary selectedAddress={selectedAddress} />
      </div>
    </div>
  );
}

export default OrderPage;
