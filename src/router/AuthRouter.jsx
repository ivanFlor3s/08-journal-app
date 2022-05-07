import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="*" element={<Navigate to={'login'}/>}></Route>

    </Routes>
  );
};
