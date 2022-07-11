import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import css from "./my-data.css";
import { state } from "../../hooks/useDataUser";
import { useRecoilValue } from "recoil";
import { TextField } from "../../ui/text-field";
import { ButtonForm } from "../../ui/button-form/ButtonForm";

export function MyData() {
  const stateLogin = useRecoilValue(state);
  const navigate = useNavigate();
  // if (!stateLogin) {
  //   return navigate("/login", { replace: true });
  // }
  // console.log("my data state", stateLogin);

  const newState = useRecoilValue(state);
  console.log("my data state", newState);

  return (
    <div className={css.page}>
      <h2>Your Information</h2>
      <form className={css.root}>
        <TextField
          type="text"
          name="fullname"
          placeholder={newState.fullname}
        ></TextField>
        <TextField
          type="text"
          name="email"
          placeholder={newState.email}
        ></TextField>
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
