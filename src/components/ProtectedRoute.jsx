import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderPage from "../pages/OrderPage";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function ProtectedRoute() {
  const token = localStorage.getItem("token");
  const history = useHistory();

  useEffect(() => {
    let redirectTimer;

    if (!token) {
      toast.error("You must log in to order.", {
        autoClose: 3000,
        position: "top-right",
      });

      redirectTimer = setTimeout(() => {
        history.push({
          pathname: "/login",
          state: { referrer: history.location.pathname },
        });
      }, 1000);
    }
  }, [token]);

  return token ? (
    <Route>
      <OrderPage />
    </Route>
  ) : null;
}
