import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Login } from "../pages/login/Login";
import { Header } from "../components/header";


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/login" element={<Header />}>
        <Route index element={<Login />} />
      </Route>
    </Routes>
  );
}
