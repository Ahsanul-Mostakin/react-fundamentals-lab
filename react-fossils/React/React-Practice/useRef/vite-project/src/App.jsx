import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ Add this line

import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import ProfilepPage from "./pages/ProfilepPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/profile" element={<ProfilepPage />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
