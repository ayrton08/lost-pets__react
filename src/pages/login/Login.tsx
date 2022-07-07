import React, { useState, useEffect, useContext, Suspense } from "react";
import { Link } from "react-router-dom";
import css from "./login.css";
import { LoginForm } from "../../components/login-comp";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../hooks/useLogin";
import { useLogin } from "../../hooks/useLogin";

export function Login() {
  const [value, setValue] = useRecoilState(userState);

  async function loginIn(dataForm) {
    const res = await useLogin(dataForm.email, dataForm.password);
    setValue(res);
  }
  localStorage.setItem("token", JSON.stringify(value));

  return (
    <div className={css.root}>
      Login
      <LoginForm onLogin={(val) => loginIn(val)}></LoginForm>
    </div>
  );
}
