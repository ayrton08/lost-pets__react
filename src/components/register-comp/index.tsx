import React from "react";
import css from "./register.css";
import { ButtonForm } from "../../ui/button-form/ButtonForm";
import { TextField } from "../../ui/text-field";
import { HideText } from "../../ui/hide-text/HideText";

export function RegisterForm() {
  return (
    <form className={css.root}>
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
