import React, { useState } from "react";
import css from "./register.css";
import { ButtonForm } from "../../ui/button-form/ButtonForm";
import { TextField } from "../../ui/text-field";
import { HideText } from "../../ui/hide-text/HideText";

type RegisterForm = {
  onRegister: (params: {
    fullname: string;
    email: string;
    password: string;
    passwordRepeat: string;
  }) => any;
  error: String;
};

export function RegisterForm(props: RegisterForm) {
  const [typeInput, setTypeInput] = useState(false);

  const changeType = () => {
    typeInput ? setTypeInput(false) : setTypeInput(true);
  };

  function onSubmitHandler(e) {
    e.preventDefault();
    const fullname = e.target.fullname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordRepeat = e.target.passwordRepited.value;
    props.onRegister({
      fullname,
      email,
      password,
      passwordRepeat,
    });
  }

  return (
    <form className={css.root} onSubmit={onSubmitHandler}>
      <TextField type="text" name="fullname" placeholder="Fullname" />
      <TextField type="email" name="email" placeholder="Email" />
      <TextField
        type={typeInput ? "text" : "password"}
        name="password"
        placeholder="Password"
      />
      <TextField
        type={typeInput ? "text" : "password"}
        name="passwordRepited"
        placeholder="Repite Password"
      />

      <HideText hide={changeType} />

      <ButtonForm>Register</ButtonForm>
    </form>
  );
}
