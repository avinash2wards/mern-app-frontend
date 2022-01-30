import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { AppMenuBar } from "./components/AppMenuBar";

const App = () => {
  return (
    <BrowserRouter>
      <AppMenuBar></AppMenuBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
