import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Quotes } from "./pages/Quotes";
import { AppMenuBar } from "./components/AppMenuBar";
import { AppFooter } from "./components/AppFooter";
const App = () => {
  return (
    <BrowserRouter>
      <AppMenuBar></AppMenuBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Quotes />} />
      </Routes>
      <AppFooter></AppFooter>
    </BrowserRouter>
  );
};

export { App };
