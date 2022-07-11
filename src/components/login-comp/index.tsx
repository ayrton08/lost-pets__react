import React, { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import css from "./login.css";
import { TextField } from "../../ui/text-field/index";
import { ButtonForm } from "../../ui/button-form/ButtonForm";

type LoginForm = {
  onLogin: (params: { email: string; password: string }) => any;
  error: String;
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
      <div className={css.error}>{props.error}</div>
      <ButtonForm>Login</ButtonForm>
    </form>
  );
}
