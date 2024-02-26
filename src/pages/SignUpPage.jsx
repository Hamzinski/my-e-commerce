import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

const initialData = {
  name: "",
  password: "",
  confirmPassword: "",
  email: "",
  role_id: "3",
  store: {
    phone: "",
    name: "",
    tax_no: "",
    bank_account: "",
  },
};

function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ defaultValues: initialData });

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    instance.get("/roles").then((res) => {
      setRoles(res.data);
      console.log("resp:", res.data);
    });
  }, []);

  const selectedRole = watch("role_id");
  const password = watch("password");

  const onSubmit = (data) => {
    const { confirmPassword, ...postData } = data;
    instance.post("/signup", postData).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input
            type="text"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters long",
              },
            })}
          />
          <span>{errors.name && errors.name.message}</span>
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /.*@.*\..*/,
                message: "Enter a valid email address",
              },
            })}
          />
          <span>{errors.email && errors.email.message}</span>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              pattern: {
                value: /^(?=.*[a-z])[A-Za-z\d@$!%*?&]+$/,
                message:
                  "Password should include at least one letter, one number, and one special character",
              },
            })}
          />
          <span>{errors.password && errors.password.message}</span>
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", {
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          <span>
            {errors.confirmPassword && errors.confirmPassword.message}
          </span>
        </div>
        <div>
          <label>Role</label>
          <select {...register("role_id")}>
            {roles.map((role_id) => (
              <option key={role_id.id} value={role_id.id}>
                {role_id.name}
              </option>
            ))}
          </select>
        </div>

        {selectedRole === "2" && (
          <>
            <div>
              <label>Store Name</label>
              <input
                type="text"
                {...register("store.name", {
                  required: "Store Name is required",
                  minLength: {
                    value: 3,
                    message: "Store Name must be at least 3 characters long",
                  },
                })}
              />
              <span>{errors.store?.name && errors.store.name.message}</span>
            </div>
            <div>
              <label>Store Phone</label>
              <input
                type="text"
                {...register("store.phone", {
                  required: "Store Phone is required",
                  pattern: {
                    value: /^\+?\d{10,14}$/,
                    message: "Enter a valid Türkiye phone number",
                  },
                })}
              />
              <span>{errors.store?.phone && errors.store.phone.message}</span>
            </div>
            <div>
              <label>Store Tax ID</label>
              <input
                type="text"
                {...register("store.tax_no", {
                  required: "Store Tax ID is required",
                  pattern: {
                    value: /^T\d{4}V\d{6}$/,
                    message: "Enter a valid Tax ID (e.g., T1234V567890)",
                  },
                })}
              />
              <span>{errors.store?.tax_no && errors.store.tax_no.message}</span>
            </div>
            <div>
              <label>Store Bank Account</label>
              <input
                type="text"
                {...register("store.bank_account", {
                  required: "Store Bank Account is required",
                  pattern: {
                    // Add your IBAN validation pattern here
                    value: /^[A-Z]{2}\d{2}[A-Za-z0-9]{1,30}$/,
                    message: "Enter a valid IBAN address",
                  },
                })}
              />

              <span>
                {errors.store?.bank_account &&
                  errors.store.bank_account.message}
              </span>
            </div>
          </>
        )}

        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
