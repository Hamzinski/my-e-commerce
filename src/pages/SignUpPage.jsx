import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

function SignUpPage() {
  const { handleSubmit, register, setError, setValue, watch } = useForm();

  const watchPassword = watch("password", "");

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/signup", data);
      console.log(response.data);
    } catch (error) {
      console.error("An error occurred while submitting the form", error);
    }
  };

  return (
    <div className="flex justify-center">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          {...register("username", { required: true, minLength: 3 })}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          {...register("password", {
            required: true,
            minLength: 8,
          })}
        />

        <label htmlFor="passwordAgain">Password again</label>
        <input
          type="password"
          name="passwordAgain"
          id="passwordAgain"
          {...register("passwordAgain", {
            required: true,
            validate: (value) =>
              value === watchPassword || "Passwords do not match",
          })}
        />
        <button className="bg-primary-bg" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
