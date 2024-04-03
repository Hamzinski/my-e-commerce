import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/UserAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialData = {
  email: "",
  password: "",
};

function LoginPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialData });

  const onSubmit = (data) => {
    setLoading(true);
    dispatch(loginUser(data))
      .then(() => {
        setLoading(false);
        toast.success("Submit successful.");
        setTimeout(() => {
          history.push("/");
        }, 3000);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        toast.error("Login failed. Check your credentials.");
      });
  };

  return (
    <div className="flex flex-col justify-center items-center mb-12 w-full mt-48 md:mt-12">
      <div className="flex flex-col w-1/2">
        <p className="text-center font-mont font-bold text-3xl text-primary-color underline decoration-solid ">
          Login
        </p>
      </div>
      <ToastContainer />
      <form
        className="flex flex-col gap-3 shadow-md w-full md:w-1/3 items-center p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col w-2/3">
          <label className="font-mont font-bold">Email</label>
          <input
            className="border-3 rounded-md border-gray-border"
            type="text"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /.*@.*\..*/,
                message: "Enter a valid email address",
              },
            })}
          />
          <span className="font-mont font-medium text-red-600">
            {errors.email && errors.email.message}
          </span>
        </div>
        <div className="flex flex-col w-2/3">
          <label className="font-mont font-bold">Password</label>
          <input
            className="border-3 rounded-md border-gray-border"
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
          />
          <span className="font-mont font-medium text-red-600">
            {errors.password && errors.password.message}
          </span>
        </div>
        <div>
          <button
            className="w-fit font-mont font-bold rounded-md text-white text-2xl bg-primary-bg py-2 px-8"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
