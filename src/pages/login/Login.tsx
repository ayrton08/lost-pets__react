import React, { useState, useEffect, useContext, Suspense } from "react";
import { Link } from "react-router-dom";
import css from "./login.css";
import { LoginForm } from "../../components/login-comp";

export function Login() {
  return (
    <div className={css.root}>
      Login
      <LoginForm></LoginForm>
    </div>
  );
}
