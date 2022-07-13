import React, { useState, useEffect, useContext, Suspense } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import css from "./login.css";
import { LoginForm } from "../../components/login-comp";
import { useRecoilState, useRecoilValue } from "recoil";
import { state } from "../../hooks/useDataUser";
import { useLogin, login } from "../../hooks/useLogin";

// arreglar el tipado de este componente
export function Login() {
  const navigate = useNavigate();
  const newState = useRecoilValue(state);
  const loginState = useRecoilValue(login);
  console.log("newState", newState);

  const [value, setValue] = useRecoilState(state);
  const [error, setError] = useState("");

  useEffect(() => {
    if (newState) {
      console.log("loginState", loginState);
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
      {newState ? (
        <Navigate to="/home" replace={true} />
      ) : (
        <LoginForm onLogin={(val) => loginIn(val)} error={error}></LoginForm>
      )}
    </div>
  );
}
