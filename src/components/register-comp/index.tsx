import React from "react";
import css from "./register.css";
import { ButtonForm } from "../../ui/button-form/ButtonForm";
import { TextField } from "../../ui/text-field";
import { HideText } from "../../ui/hide-text/HideText";

type RegisterForm = {
  onLogin: (params: {
    fullname: string;
    email: string;
    password: string;
  }) => any;
  error: String;
};

export function RegisterForm(props: RegisterForm) {
  function onSubmitHandler(e) {
    e.preventDefault();
    const fullname = e.target.fullname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    props.onLogin({
      fullname,
      email,
      password,
    });
  }

  return (
    <form className={css.root} onSubmit={onSubmitHandler}>
      <TextField type="text" name="fullname" placeholder="Fullname" />
      <TextField type="email" name="email" placeholder="Email" />
      <TextField type="password" name="password" placeholder="Password" />
      <TextField
        type="password"
        name="passwordRepited"
        placeholder="Repite Password"
      />

      <HideText></HideText>

      <ButtonForm>Register</ButtonForm>
    </form>
  );
}
