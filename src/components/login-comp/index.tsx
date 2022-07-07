import React, { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import css from "./login.css";
import { TextField } from "../text-field/index";

type LoginForm = {
  onLogin: (params: { email: string; password: string }) => any;
};

export function LoginForm(props: LoginForm) {
  function onSubmitHandler(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    props.onLogin({
      email,
      password,
    });
  }

  return (
    <form className={css.root} onSubmit={onSubmitHandler}>
      <TextField type="email" name="email" placeholder="Email" />
      <TextField type="password" name="password" placeholder="Contraseña" />
      <button>Login</button>
    </form>
  );
}
