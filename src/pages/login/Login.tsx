import React, { useState, useEffect, useContext, Suspense } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import css from "./login.css";
import { LoginForm } from "../../components/login-comp";
import { useRecoilState, useRecoilValue } from "recoil";
import { state } from "../../lib/dataUser";
import { useLogin, login } from "../../hooks/useLogin";
import { useDataUser } from "../../lib/dataUser";

// arreglar el tipado de este componente
export function Login() {
  const navigate = useNavigate();
  const [newState, setNewState] = useRecoilState(state);
  const [loginState, setLoginState] = useRecoilState(login);

  const [value, setValue] = useRecoilState(state);
  const [error, setError] = useState("");

  async function loginIn(dataForm) {
    const res = await useLogin(dataForm.email, dataForm.password);

    localStorage.setItem("token", JSON.stringify(res));
    setNewState(res);

    if (res === null) {
      setError("Error en el login");
    } else {
      const newData = await useDataUser();
      setLoginState(newData);
      setValue(res);
      return navigate("/home", { replace: true });
    }
  }

  return (
    <div className={css.root}>
      <h2 className={css.title}>Login</h2>
      {newState ? (
        <Navigate to="/home" replace={true} />
      ) : (
        <LoginForm onLogin={(val) => loginIn(val)} error={error}></LoginForm>
      )}
    </div>
  );
}
