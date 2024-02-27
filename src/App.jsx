import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ProductListPage from "./pages/ProductListPage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import SignUpPage from "./pages/SignUpPage";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { Provider } from "react-redux";
import { store } from "../src/store/Store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/productlist" component={ProductListPage} />
          <Route path="/product" component={ProductPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/signup" component={SignUpPage} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
