import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import css from "./my-data.css";
import { useDataUser } from "../../hooks/useDataUser";
import { loginState } from "../../hooks/useDataUser";
import { useRecoilState } from "recoil";
import { ButtonGeneric } from "../../ui/buttons-generic/button-generic";
import { TextField } from "../../ui/text-field";
import { ButtonForm } from "../../ui/button-form/ButtonForm";

export function MyData() {
  const [stateUser, setStateUser] = useRecoilState(loginState);

  return (
    <div className={css.page}>
      <h2>Your Information</h2>
      <form className={css.root}>
        <TextField type="text" name="fullname" placeholder=""></TextField>
        <TextField
          type="password"
          name="password"
          placeholder="New password"
        ></TextField>
        <TextField
          type="password"
          name="password-repeat"
          placeholder="Repeat new password"
        ></TextField>
        <ButtonForm>Save</ButtonForm>
      </form>
    </div>
  );
}
