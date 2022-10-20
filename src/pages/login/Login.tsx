/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import css from "./login.css";
import { LoginForm } from "../../components/login-comp";
import { useRecoilState } from "recoil";
import { state } from "../../lib/atoms";
import { useLogin, login } from "../../hooks/useLogin";
import { dataUser } from "../../lib/dataUser";

// arreglar el tipado de este componente
export function Login() {
  const navigate = useNavigate();
  const [newState, setNewState] = useRecoilState(state);
  const [loginState, setLoginState] = useRecoilState(login);

  const [value, setValue] = useRecoilState(state);
  const [error, setError] = useState("");

  const [isLoging, setIsLoging] = useState(false);

  async function loginIn(dataForm) {
    setIsLoging(true);
    const res = await useLogin(dataForm.email, dataForm.password);
    console.log(res);
    setIsLoging(false);

    localStorage.setItem("token", JSON.stringify(res));
    setNewState(res);

    if (res === null) {
      setError("Something went wrong, please try again");
    } else {
      const newData = await dataUser();
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
        <LoginForm
          onLogin={(val) => loginIn(val)}
          error={error}
          isLoging={isLoging}
        />
      )}
    </div>
  );
}
