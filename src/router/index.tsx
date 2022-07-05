import React from "react";
import { Routes, Route } from "react-router-dom";
import { Welcome } from "../pages/welcome/Welcome";
import { Login } from "../pages/login/Login";
import { Header } from "../components/header";
import { Register } from "../pages/register/Register";
import { Home } from "../pages/home/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}
