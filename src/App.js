import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>&nbsp;
      <Link to="/products">About</Link>&nbsp;
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
