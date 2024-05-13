import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/Auth/Login";
import HomePage from "./pages/Home/Client";

export default function Mainrouter() {
  const isAuthenticated = !!localStorage.getItem("auth");

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}
