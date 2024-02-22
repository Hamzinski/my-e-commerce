import "./App.css";
import Home from "./pages/Home";
import ProductListPage from "./pages/ProductListPage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import SignUpPage from "./pages/SignUpPage";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductListPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
