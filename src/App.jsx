import React, { useEffect } from "react";
import axios from "axios";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ProductListPage from "./pages/ProductListPage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { Provider } from "react-redux";
import { store } from "../src/store/Store";
import { setUser, clearUser } from "../src/store/actions/UserAction";
import ShoppingCartPage from "./pages/ShoppingCartPage";

function App() {
  useEffect(() => {
    const token = localStorage.getItem("token");

    const handleAuthSuccess = (userData) => {
      store.dispatch(setUser(userData));
      localStorage.setItem("token", userData.token);
      axios.defaults.headers.common["Authorization"] = userData.token;
    };

    const handleAuthFailure = () => {
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
      store.dispatch(clearUser());
    };

    if (token) {
      axios
        .get("https://workintech-fe-ecommerce.onrender.com/verify", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          // Successful verification
          handleAuthSuccess(res.data);
        })
        .catch((error) => {
          // Failed verification
          console.error("Auto login failed:", error);
          handleAuthFailure();
        });
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shopping" component={ProductListPage} />
          <Route
            path="/products/:category/:productId/:productNameSlug"
            component={ProductPage}
          />
          <Route path="/cart" component={ShoppingCartPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
