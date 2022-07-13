import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import css from "./form-my-data.css";
// import { state } from "../../hooks/useDataUser";
import { login } from "../../hooks/useLogin";
import { useRecoilValue } from "recoil";
import { TextField } from "../../ui/text-field";
import { ButtonForm } from "../../ui/button-form/ButtonForm";

type FormMyData = {
  myData: (params: {
    fullname: string;
    password?: string;
    passwordRepeat?: string;
  }) => any;
};

export function FormMyData(props: FormMyData) {
  const stateLogin = useRecoilValue(login);
  const navigate = useNavigate();
  // if (!stateLogin) {
  //   return navigate("/login", { replace: true });
  // }
  // console.log("my data state", stateLogin);

  function onSubmitHandler(e) {
    e.preventDefault();
    const fullname = e.target.fullname.value;
    const password = e.target.password.value;
    const passwordRepeat = e.target.passwordRepeat.value;
    props.myData({
      fullname,
      password,
      passwordRepeat,
    });
  }
  return (
    <div className={css.page}>
      <h2 className={css.title}>Your Information</h2>
      <form className={css.root} onSubmit={onSubmitHandler}>
        <TextField
          type="text"
          name="fullname"
          placeholder={stateLogin["fullname"]}
        ></TextField>
        <TextField
          type="text"
          name="email"
          placeholder={stateLogin["email"]}
        ></TextField>
        <TextField
          type="password"
          name="password"
          placeholder="New password"
        ></TextField>
        <TextField
          type="password"
          name="passwordRepeat"
          placeholder="Repeat new password"
        ></TextField>
        <ButtonForm>Save</ButtonForm>
      </form>
    </div>
  );
}
