import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
function OrderPage() {
  const [showThirdDiv, setShowThirdDiv] = useState(true);
  const [showFourthDiv, setShowFourthDiv] = useState(false);
  const [isPaymentOptionSelected, setIsPaymentOptionSelected] = useState(false);

  const toggleThirdDiv = () => {
    setShowThirdDiv(!showThirdDiv);
    setShowFourthDiv(false);
    setIsPaymentOptionSelected(false);
  };

  const toggleFourthDiv = () => {
    setShowFourthDiv(!showFourthDiv);
    setShowThirdDiv(false);
    setIsPaymentOptionSelected(true);
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
    </div>
  );
}

export default OrderPage;
