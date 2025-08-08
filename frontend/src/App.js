import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PaymentPage from "./components/PaymentPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment/:packId" element={<PaymentPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;