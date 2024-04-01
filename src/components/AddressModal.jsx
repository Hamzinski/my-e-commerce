import React, { useState, useEffect } from "react";
import { Modal } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faX } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import {
  getDistrictsOfEachCity,
  getCityNames,
  getNeighbourhoodsByCityCodeAndDistrict,
  getCityCodes,
} from "turkey-neighbourhoods";
import { useDispatch } from "react-redux";
import {
  setAddressThunkAction,
  updateAddressThunkAction,
} from "../store/actions/ShoppingCartAction";
export default function AddressModal({ modal, setModal, address }) {
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
  const dispatch = useDispatch();
  const codes = getCityCodes();
  const [districtsOfCity, setDistrictsOfCity] = useState([districts[""]]);
  const [cityCode, setCityCode] = useState("");
  const [neighborhood, setNeighborhood] = useState([""]);
  const cityDistrictNeighborhoodObj = {};

  cities.forEach((city, i) => {
    cityDistrictNeighborhoodObj[codes[i]] = city;
  });

  const onFormSubmit = (formData) => {
    const cityName = cityDistrictNeighborhoodObj[formData.city];
    const postData = {
      title: formData.title,
      name: formData.name,
      surname: formData.surname,
      phone: formData.phone,
      address: formData.address,
      city: cityName,
      district: formData.district,
      neighborhood: formData.neighborhood,
    };
    console.log("FormData:", formData);
    if (address && address.id) {
      const updatedFormData = {
        ...address,
        ...postData,
      };
      dispatch(updateAddressThunkAction(updatedFormData));
      console.log("ID:", address.id);
      console.log("FormData:", postData);
      setModal(false);
    } else {
      dispatch(setAddressThunkAction(postData));
      setModal(false);
    }
  };

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
    <Modal
      className="font-mont"
      isOpen={modal}
      show="true"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {" "}
      <div className="flex items-center justify-between bg-primary-bg">
        {" "}
        <FontAwesomeIcon
          icon={faUser}
          className="w-fit p-3 text-2xl text-white"
        />
        <p className="text-white text-2xl">Address Form</p>
        <FontAwesomeIcon
          onClick={() => setModal(false)}
          icon={faX}
          className="w-fit p-3 text-2xl text-white cursor-pointer"
        />
      </div>
      <div className="w-3/5 m-auto py-16">
        <div>
          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className="flex flex-col p-2"
          >
            <div className="flex flex-col w-full">
              <div className=" flex flex-col ">
                <label className="font-bold text-xl pb-3">Address Title</label>
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
                <label className="font-bold text-xl py-3">Name</label>
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
                <span className="text-red-600">{errors.name?.message}</span>
              </div>
              <div className="flex flex-col w-1/2">
                <label className="font-bold text-xl py-3">Surname</label>
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
                <span className="text-red-600">{errors.surname?.message}</span>
              </div>
            </div>
            <div className="flex justify-between gap-1">
              <div className="w-1/2 flex flex-col">
                <label className="font-bold text-xl py-3">Phone</label>
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
                <label className="font-bold text-xl py-3">City</label>
                <select
                  className="p-2 rounded-md border border-[#DADADA] text-black"
                  {...register("city")}
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
                <div className="text-red-600">{errors.city?.message}</div>
              </div>
            </div>
            <div className="flex justify-between gap-1">
              <div className="w-1/2 flex flex-col">
                <label className="font-bold text-xl py-3">District</label>
                <select
                  className="p-2 rounded-md border border-[#DADADA] text-black"
                  {...register("district")}
                  onChange={districtHandle}
                >
                  {districtsOfCity?.map((district, i) => (
                    <option
                      key={i}
                      value={district}
                      className="flex flex-wrap text-lg font-bold"
                    >
                      {district}
                    </option>
                  ))}
                </select>
                <div className="text-red-600">{errors.district?.message}</div>
              </div>
              <div className="w-1/2 flex flex-col">
                <label className="font-bold text-xl py-3">Neighborhood</label>
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
              <label className="font-bold text-xl py-3">Address</label>
              <input
                type="text"
                placeholder="Address"
                className="p-4 rounded-md border border-[#DADADA] text-black"
                {...register("address", {
                  required: "Address is required!",
                })}
                invalid={errors.address?.message}
              />
              <div className="text-red-600">{errors.address?.message}</div>
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
  );
}
