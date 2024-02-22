import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Label } from "reactstrap";
import axios from "axios";

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

function SignUpPage() {
  const { handleSubmit, register, setError, setValue, watch } = useForm();

  const watchPassword = watch("password", "");

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/roles", data);
      console.log(response.data);
    } catch (error) {
      console.error("Form gönderilirken bir hata oluştu", error);
    }
  };

  return (
    <div className="flex justify-center">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          name="username"
          id="username"
          {...register("username", { required: true, minLength: 3 })}
        />

        <Label htmlFor="email">E-mail</Label>
        <Input
          type="email"
          name="email"
          id="email"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
        />

        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          {...register("password", {
            required: true,
            minLength: 8,
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          })}
        />

        <Label htmlFor="passwordAgain">Password again</Label>
        <Input
          type="password"
          name="passwordAgain"
          id="passwordAgain"
          {...register("passwordAgain", {
            required: true,
            validate: (value) =>
              value === watchPassword || "Passwords do not match",
          })}
        />
        <Button className="bg-primary-bg" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default SignUpPage;
