import { useForm } from "react-hook-form";
import { Modal } from "reactstrap";
import { useEffect } from "react";
import { faX, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function CardModal({ cardModal, setCardModal, card }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      card_number: "",
      month: "",
      year: "",
      name: "",
    },
    mode: "onChange",
  });
  const months = ["Month", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const date = new Date().getFullYear();
  const years = ["Year", date];
  for (let i = 1; i < 41; i++) {
    years.push(date + i);
  }

  useEffect(() => {
    setValue("card_number", card?.card_number || "");
    setValue("month", card?.month || "");
    setValue("year", card?.year || "");
    setValue("name", card?.name || "");
  }, [card, setValue]);

  return (
    <Modal
      className="font-mont"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      isOpen={cardModal}
      toggle={() => setCardModal(!cardModal)}
    >
      {" "}
      <div className="flex items-center justify-between bg-primary-bg">
        {" "}
        <FontAwesomeIcon
          icon={faCreditCard}
          className="w-fit p-3 text-2xl text-white"
        />
        <p className="text-white text-2xl">Card Form</p>
        <FontAwesomeIcon
          onClick={() => setCardModal(false)}
          icon={faX}
          className="w-fit p-3 text-2xl text-white cursor-pointer"
        />
      </div>
      <div className="py-4">
        <form className="flex flex-col gap-2 px-8">
          <label className="flex flex-col ">
            {" "}
            Card Number
            <input
              type="text"
              className="p-2 border-none rounded-md bg-gray-100 focus:border-none"
              {...register("card_number", {
                required: "Card number is Required!!",
                pattern: {
                  value: /^\d{16}$/,
                  message: "Card number should be 16 digit!",
                },
              })}
            ></input>
            <div className="text-red-700">{errors.card_number?.message}</div>
          </label>
          <div className="flex justify-between ">
            <div>
              <label className="">Expiration Date</label>
              <div className="flex gap-12">
                <select
                  className="p-[6px] rounded-md bg-gray-100"
                  {...register("month")}
                >
                  {months?.map((month, i) => (
                    <option key={i} value={month} className="">
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  className="p-[6px] rounded-md bg-gray-100"
                  {...register("year")}
                >
                  {years?.map((year, i) => (
                    <option key={i} value={year} className="">
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="">Name on Card</label>
              <div className="w-1/3">
                {" "}
                <input
                  type="text"
                  className="bg-gray-100 p-1 rounded-md "
                  {...register("name", {
                    required: "Name is required!",
                    minLength: {
                      value: 3,
                    },
                  })}
                />
                <div className="text-red-500 w-40">{errors.name?.message}</div>
              </div>
            </div>
          </div>

          <label className="flex gap-1">
            <input
              type="checkbox"
              className="bg-gray-100 rounded-md w-4 accent-orange-700 "
              {...register("secure")}
            ></input>
            I want to pay with 3D Secure
          </label>
          <button
            disabled={!isValid}
            type="submit"
            className="w-20 p-2 bg-primary-bg  text-white rounded-lg hover:bg-orange-200 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
}
