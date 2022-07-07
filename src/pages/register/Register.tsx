import React, { useState, useEffect, useContext, Suspense } from "react";
import { Link } from "react-router-dom";
import css from "./register.css";
import { RegisterForm } from "../../components/register-comp";
import { useRegister } from "../../hooks/useRegister";

export function Register() {
  async function loginIn(dataForm) {
    const res = await useRegister(dataForm);
    console.log("respuesta", res);
  }

  return (
    <div className={css.root}>
      Register
      <RegisterForm
        onLogin={(val) => loginIn(val)}
        error={undefined}
      ></RegisterForm>
    </div>
  );
}
