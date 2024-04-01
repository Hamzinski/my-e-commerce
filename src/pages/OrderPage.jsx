import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  faInfo,
  faPhone,
  faPlus,
  faTrashAlt,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardModal from "../components/CardModal.jsx";
import AddressModal from "../components/AddressModal.jsx";
import axios from "axios";
import {
  removeAddressThunkAction,
  setAddress,
  setLoading,
} from "../store/actions/ShoppingCartAction.jsx";

function OrderPage() {
  const [showThirdDiv, setShowThirdDiv] = useState(true);
  const [showFifthDiv, setShowFifthDiv] = useState(true);
  const [showFourthDiv, setShowFourthDiv] = useState(false);
  const [showSixthDiv, setShowSixthDiv] = useState(false);
  const [isPaymentOptionSelected, setIsPaymentOptionSelected] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
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
  const [cardModal, setCardModal] = useState(false);

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

  return (
    <div className="custom-container">
      <div className="flex">
        {" "}
        <div
          className={`font-mont flex flex-col gap-2 border-b-2 py-3 w-3/4 px-3 border-primary-border-color cursor-pointer ${
            !isPaymentOptionSelected ? "bg-gray-200" : "bg-white"
          }`}
          onClick={toggleThirdDiv}
        >
          <h1 className="text-2xl text-primary-color">Adres Bilgileri</h1>
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
            Ödeme Seçenekleri
          </h1>
          <p>
            <span className="font-bold text-black">Banka/Kredi Kartı</span> veya{" "}
            <span className="font-bold text-black">Alışveriş Kredisi</span> ile
            ödemenizi güvenle yapabilirsiniz
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
            className="rounded-full text-white border-1 h-6 w-6 bg-primary-bg"
            icon={faInfo}
          />
          <p>
            Kurumsal faturalı alışveriş yapmak için "Faturamı Aynı Adrese
            Gönder" tikini kaldırın ve Fatura adresi olarak kayıtlı kurumsal
            fatura adresinizi seçin.
          </p>
        </div>
      )}
      {showFifthDiv && (
        <div className="font-mont flex flex-col mt-3 border-2 py-3 px-10">
          <div className="flex justify-between items-center">
            <h1 className="text-xl">Teslimat Adresi</h1>
            <div className="flex gap-1 ">
              <input type="checkbox" />
              <label htmlFor="">Faturamı aynı adrese gönder</label>
            </div>
          </div>
          <div className="flex flex-col gap-2 py-4">
            <div
              className="flex flex-col items-center gap-2 border-1 rounded-md w-1/2 justify-center py-5 hover:bg-gray-200 cursor-pointer"
              onClick={() => setModal(!modal)}
            >
              <FontAwesomeIcon
                className="text-primary-color text-xl"
                icon={faPlus}
              />
              <h1 className="text-lg">Yeni Adres Ekle</h1>
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
                    <div key={index} className="w-1/2 flex flex-col p-1">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2 ">
                          <input
                            type="checkbox"
                            checked={selectedAddress?.id === item.id}
                            onChange={(e) =>
                              handleCheckboxChange(e.target.checked, item)
                            }
                          />
                          <label htmlFor="">{item.title}</label>
                        </div>
                        <p
                          onClick={() => openEditModal(item)}
                          className="text-sm underline cursor-pointer"
                        >
                          Düzenle
                        </p>
                      </div>
                      <div className="border-1 rounded-md flex flex-col gap-7 px-3 h-full py-3 justify-center">
                        <div className="flex justify-between">
                          <div className="flex gap-2">
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
          <input type="checkbox" checked />
          <label htmlFor="">
            Kart ile ödemeyi seçtiniz.Banka veya Kredi Kartı kullanarak
            ödemenizi güvenle yapabilirsiniz.
          </label>
        </div>
      )}
      {showSixthDiv && (
        <div className="font-mont border-2 py-3 mt-2 px-3">
          <div className="flex">
            <div className="flex flex-col w-1/2 px-2">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Kart Bilgileri</h1>
                <p
                  onClick={() => setCardModal(!cardModal)}
                  className="underline cursor-pointer"
                >
                  Başka bir Kart ile Ödeme Yap
                </p>
                <CardModal
                  cardModal={cardModal}
                  setCardModal={setCardModal}
                  card={selectedCard}
                />
              </div>
              <div className="py-6 flex flex-wrap">
                <div className="flex flex-col gap-2 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" checked="true" />
                    <label className="text-black font-bold" htmlFor="">
                      Kartım
                    </label>
                  </div>
                  <div className="w-80 h-40 border-1 border-primary-border-color rounded-lg">
                    <div className="flex flex-col px-3">
                      <div className="flex items-center justify-between ">
                        <img
                          className="w-36 p-2"
                          src="https://upload.wikimedia.org/wikipedia/commons/0/0c/DenizBank_logo.svg"
                          alt=""
                        />
                        <img
                          className="w-16 p-2"
                          src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                          alt=""
                        />
                      </div>
                      <div className="text-end flex flex-col pt-6">
                        <p>Card No</p>
                        <p>Ay / Yıl</p>
                        <p>Card Name</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-l-2 w-1/2 px-2">
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">Taksit Seçenekleri</h1>
              </div>
              <div className="border-1 border-primary-border-color flex flex-col gap-3 py-3 px-4 rounded-lg mt-10">
                <div className="flex justify-between border-b-2 border-primary-border-color py-2">
                  <p>Taksit Sayısı</p>
                  <p>Aylık Ödeme</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-1">
                    <input type="checkbox" checked="true" />
                    <label htmlFor="">Tek Çekim</label>
                  </div>
                  <p>Toplam $</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderPage;
