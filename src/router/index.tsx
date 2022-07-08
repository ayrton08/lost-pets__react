import React from "react";
import { Routes, Route } from "react-router-dom";
import { Welcome } from "../pages/welcome/Welcome";
import { Login } from "../pages/login/Login";
import { Header } from "../components/header";
import { Register } from "../pages/register/Register";
import { Home } from "../pages/home/Home";
import { MyData } from "../pages/my-data/MyData";
import { MyReports } from "../pages/my-reports/MyReports";
import { ReportPet } from "../pages/report-pet/ReportPet";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="my-data" element={<MyData />} />
        <Route path="my-reports" element={<MyReports />} />
        <Route path="report-pet" element={<ReportPet />} />
      </Route>
    </Routes>
  );
}
