import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import SpotsPage from "../pages/SpotsPage/SpotsPage";
import { useState } from "react";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/spots/:id" element={<SpotsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
