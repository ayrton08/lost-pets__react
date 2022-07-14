import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Welcome } from "../pages/welcome/Welcome";
import { Login } from "../pages/login/Login";
import { Header } from "../components/header";
import { Register } from "../pages/register/Register";
import { Home } from "../pages/home/Home";
import { MyData } from "../pages/my-data/MyData";
import { MyReports } from "../pages/my-reports/MyReports";
import { ReportPet } from "../pages/report-pet/ReportPet";
import { useRecoilState } from "recoil";
import { state } from "../hooks/useDataUser";
import { useDataUser } from "../hooks/useDataUser";
import { login } from "../hooks/useLogin";
const token = JSON.parse(localStorage.getItem("token"));

export function AppRoutes() {
  const [stateUser, setStateUser] = useRecoilState(state);
  const [loginState, setLoginState] = useRecoilState(login);

  useEffect(() => {
    setLoginState(token);
    if (token) {
      useDataUser().then((data) => {
        setStateUser(token);
        setLoginState(data);
      });
    }
  }, [token]);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="my-data" element={<MyData />} />
        <Route path="my-reports" element={<MyReports />} />
        <Route path="report-pet/:id" element={<ReportPet />} />
        <Route path="report-pet" element={<ReportPet />} />
      </Route>
    </Routes>
  );
}
