import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header";
import SpotPage from "../src/pages/SpotPage/SpotPage";
import SpotsPage from "../src/pages/SpotsPage/SpotsPage";
import HomePage from "../src/pages/HomePage/HomePage";
import SpotForm from "../src/pages/SpotForm/SpotForm";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/spots/:id" element={<SpotPage />} />
        <Route path="/spots" element={<SpotsPage />} />
        <Route path="/upload" element={<SpotForm />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
