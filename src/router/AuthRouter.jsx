import { Routes, Route } from "react-router-dom";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
    </Routes>
  );
};
