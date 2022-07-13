import React, { useState, useEffect, useContext, Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import css from "./login.css";
import { LoginForm } from "../../components/login-comp";
import { useRecoilState, useRecoilValue } from "recoil";
import { useLogin } from "../../hooks/useLogin";
import { state } from "../../hooks/useDataUser";

// arreglar el tipado de este componente
export function Login() {
  const navigate = useNavigate();
  const newState = useRecoilValue(state);
  console.log("newState", newState);
  if (newState["id"]) {
    return navigate("/home", { replace: true });
  }

  const [value, setValue] = useRecoilState(state);
  const [error, setError] = useState("");

  useEffect(() => {
    if (newState) {
      localStorage.setItem("token", JSON.stringify(newState));
    }
  }, [newState]);

  async function loginIn(dataForm) {
    const res = await useLogin(dataForm.email, dataForm.password);
    if (res === null) {
      setError("Error en el login");
    } else {
      setValue(res);
      return navigate("/home", { replace: true });
    }
  }

  return (
    <div className={css.root}>
      <LoginForm onLogin={(val) => loginIn(val)} error={error}></LoginForm>
    </div>
  );
}
