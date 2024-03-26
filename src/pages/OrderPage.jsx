import {
  faInfo,
  faPhone,
  faPlus,
  faTrashAlt,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Modal } from "reactstrap";
import {
  getDistrictsOfEachCity,
  getCityNames,
  getNeighbourhoodsByCityCodeAndDistrict,
  getCityCodes,
} from "turkey-neighbourhoods";

function OrderPage(address) {
  const [showThirdDiv, setShowThirdDiv] = useState(true);
  const [showFifthDiv, setShowFifthDiv] = useState(true);
  const [showFourthDiv, setShowFourthDiv] = useState(false);
  const [isPaymentOptionSelected, setIsPaymentOptionSelected] = useState(false);

  const toggleThirdDiv = () => {
    setShowThirdDiv(!showThirdDiv);
    setShowFifthDiv(!showFifthDiv);
    setShowFourthDiv(false);
    setIsPaymentOptionSelected(false);
  };

  const toggleFourthDiv = () => {
    setShowFourthDiv(!showFourthDiv);
    setShowThirdDiv(false);
    setShowFifthDiv(false);
    setIsPaymentOptionSelected(true);
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      name: "",
      surname: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
      address: "",
    },
    mode: "onChange",
  });
  const cities = getCityNames();
  const districts = getDistrictsOfEachCity();
  const codes = getCityCodes();
  const [districtsOfCity, setDistrictsOfCity] = useState([districts["01"]]);
  const [cityCode, setCityCode] = useState("01");
  const [neighborhood, setNeighborhood] = useState([""]);
  const cityDistrictNeighborhoodObj = {};
  cities.forEach((city, i) => {
    cityDistrictNeighborhoodObj[codes[i]] = city;
  });

  useEffect(() => {
    setValue("title", address?.title || "");
    setValue("name", address?.name || "");
    setValue("surname", address?.surname || "");
    setValue("phone", address?.phone || "");
    setValue("city", address?.city || "");
    setValue("district", address?.district || "");
    setValue("neighborhood", address?.neighborhood || "");
    setValue("address", address?.address || "");
  }, [address, setValue]);

  const clickHandleCity = (e) => {
    const value = e.target.value;
    setCityCode(value);
    setDistrictsOfCity(districts[value]);
  };

  const districtHandle = (e) => {
    setNeighborhood(
      getNeighbourhoodsByCityCodeAndDistrict(cityCode, e.target.value)
    );
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
              onClick={toggle}
            >
              <FontAwesomeIcon
                className="text-primary-color text-xl"
                icon={faPlus}
              />
              <h1 className="text-lg">Yeni Adres Ekle</h1>
              <Modal
                className="font-mont"
                isOpen={modal}
                toggle={toggle}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <FontAwesomeIcon
                  onClick={() => setModal(false)}
                  icon={faX}
                  className="py-2 border-1 bg-primary-bg text-white cursor-pointer"
                />
                <div className="w-1/2 m-auto py-16">
                  <div>
                    <form className="flex flex-col p-2 ">
                      <div className="flex flex-col w-full">
                        <div className=" flex flex-col ">
                          <label className="font-bold text-xl p-3">
                            Address Title
                          </label>
                          <input
                            autoFocus
                            placeholder="Address Title"
                            className="p-2 rounded-md border border-[#DADADA] text-black"
                            {...register("title")}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between gap-1">
                        <div className="flex flex-col w-1/2">
                          <label className="font-bold text-xl p-3">Name</label>
                          <input
                            placeholder="Name"
                            className="p-2 rounded-md border border-[#DADADA] text-black"
                            type="text"
                            {...register("name", {
                              required: "Name is required!",
                              minLength: {
                                value: 3,
                                message: "At least 3 char is must be",
                              },
                            })}
                            invalid={errors.name?.message}
                          />
                          <span className="text-red-600">
                            {errors.name?.message}
                          </span>
                        </div>
                        <div className="flex flex-col w-1/2">
                          <label className="font-bold text-xl p-3">
                            Surname
                          </label>
                          <input
                            placeholder="Surname"
                            className={
                              "p-2 rounded-md border border-[#DADADA] text-black"
                            }
                            type="text"
                            {...register("surname", {
                              required: "surname is required!",
                              minLength: {
                                value: 3,
                                message: "At least 3 char is must be",
                              },
                            })}
                            invalid={errors.surname?.message}
                          />
                          <span className="text-red-600">
                            {errors.surname?.message}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between gap-1">
                        <div className="w-1/2 flex flex-col">
                          <label className="font-bold text-xl p-3">Phone</label>
                          <input
                            placeholder="555 456 24 21"
                            className={`p-2 rounded-md border border-[#DADADA] text-black`}
                            type="text"
                            {...register("phone", {
                              required: "phone is required.",
                              maxLength: {
                                value: 10,
                                message: "Must be at most 10 characters",
                              },
                            })}
                          />
                          <div className="text-red-600 invalid-feedback">
                            {errors.phone?.message}
                          </div>
                        </div>
                        <div className="w-1/2 flex flex-col">
                          <label className="font-bold text-xl p-3">City</label>
                          <select
                            className="p-2 rounded-md border border-[#DADADA] text-black"
                            {...register("city")}
                            onClick={(e) => changeOptionHandle(e)}
                            onChange={clickHandleCity}
                          >
                            {codes?.map((code, i) => (
                              <option
                                key={i}
                                value={code}
                                id={code}
                                className="text-lg font-bold"
                              >
                                {cityDistrictNeighborhoodObj[code]}
                              </option>
                            ))}
                          </select>
                          <div className="text-red-600">
                            {errors.city?.message}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between gap-1">
                        <div className="w-1/2 flex flex-col">
                          <label className="font-bold text-xl p-3">
                            District
                          </label>
                          <select
                            className="p-2 rounded-md border border-[#DADADA] text-black"
                            {...register("district")}
                            onChange={districtHandle}
                          >
                            {districtsOfCity?.map((district, i) => (
                              <option
                                key={i}
                                value={district}
                                className="text-lg font-bold"
                              >
                                {district}
                              </option>
                            ))}
                          </select>
                          <div className="text-red-600">
                            {errors.district?.message}
                          </div>
                        </div>
                        <div className="w-1/2 flex flex-col">
                          <label className="font-bold text-xl p-3">
                            Neighborhood
                          </label>
                          <select
                            placeholder="Neighborhood"
                            className="p-2 rounded-md border border-[#DADADA] text-black"
                            {...register("neighborhood")}
                          >
                            {neighborhood?.map((n, i) => (
                              <option
                                key={i}
                                value={n}
                                className="text-lg font-bold"
                                invalid={errors.neighborhood?.message}
                              >
                                {n}
                              </option>
                            ))}
                          </select>
                          <div className="text-red-600">
                            {errors.neighborhood?.message}
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex flex-col ">
                        <label className="font-bold text-xl p-3">Address</label>
                        <input
                          type="text"
                          placeholder="Address"
                          className="p-4 rounded-md border border-[#DADADA] text-black"
                          {...register("address", {
                            required: "Address is required!",
                          })}
                          invalid={errors.address?.message}
                        />
                        <div className="text-red-600">
                          {errors.address?.message}
                        </div>
                      </div>

                      <button
                        className="flex justify-center bg-primary-bg text-white px-6 py-3 rounded-md text-xl mt-6 hover:bg-hover-color cursor-pointer text-center"
                        type="submit"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </Modal>
            </div>

            <div className="font-mont flex flex-wrap">
              <div className="w-1/2 flex flex-col">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 ">
                    <input type="checkbox" checked="true" />
                    <label htmlFor="">title</label>
                  </div>
                  <p className="text-sm underline cursor-pointer">Düzenle</p>
                </div>
                <div className="border-1 rounded-md flex flex-col gap-7 px-3 h-full py-3 justify-center">
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <FontAwesomeIcon
                        className="text-primary-color"
                        icon={faUser}
                      />
                      <h2>Ad Soyad</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                      <FontAwesomeIcon
                        className="text-primary-color"
                        icon={faPhone}
                      />

                      <h2 className="text-sm">Telefon</h2>
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <p>
                      Adress
                      <br />
                      Neighborhood <br />
                      City District
                    </p>
                    <div>
                      <FontAwesomeIcon
                        className="text-primary-color rounded-full cursor-pointer"
                        icon={faTrashAlt}
                      />
                    </div>
                  </div>
                </div>
              </div>
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
    </div>
  );
}

export default OrderPage;
