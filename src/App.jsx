import "./App.css";
import Home from "./pages/Home";
import ProductListPage from "./pages/ProductListPage";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
