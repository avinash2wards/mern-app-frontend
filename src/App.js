import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
