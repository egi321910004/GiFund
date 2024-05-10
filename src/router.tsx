import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Auth/Login";
import HomePage from "./pages/Home/Client";
export default function Mainrouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </>
  );
}
