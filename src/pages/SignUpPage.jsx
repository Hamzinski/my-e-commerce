import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const history = useHistory();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const { confirmPassword, ...postData } = data;
    instance
      .post("/signup", postData)
      .then((res) => {
        console.log(res);
        toast.success(
          "Submit successful. Check your email to activate your account!"
        );
        setTimeout(() => {
          history.goBack();
        }, 5000);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Submit failed. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center">
      <ToastContainer />
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
          <button type="submit" disabled={loading}>
            {loading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              "Sign Up"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
