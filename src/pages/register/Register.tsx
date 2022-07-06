import React, { useState, useEffect, useContext, Suspense } from "react";
import { Link } from "react-router-dom";
import css from "./register.css";
import { RegisterForm } from "../../components/register-comp";

export function Register() {
  return (
    <div className={css.root}>
      Register
      <RegisterForm></RegisterForm>
    </div>
  );
}
