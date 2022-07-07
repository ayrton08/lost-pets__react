import React, { useState, useEffect, useContext, Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import css from "./login.css";
import { LoginForm } from "../../components/login-comp";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../hooks/useLogin";
import { useLogin } from "../../hooks/useLogin";

export function Login() {
  const [value, setValue] = useRecoilState(userState);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  async function loginIn(dataForm) {
    const res = await useLogin(dataForm.email, dataForm.password);
    console.log("res", res);
    if (res === null) {
      setError("Error en el login");
    } else {
      setValue(res);
      return navigate("/home", { replace: true });
    }
  }
  localStorage.setItem("token", JSON.stringify(value));

  return (
    <div className={css.root}>
      <LoginForm onLogin={(val) => loginIn(val)} error={error}></LoginForm>
    </div>
  );
}
