import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import css from "./welcome.css";
import { dataUser } from "../../lib/dataUser";
import { state } from "../../lib/dataUser";
import { useRecoilState, useRecoilValue } from "recoil";
import { ButtonGeneric } from "../../ui/buttons-generic/button-generic";

export function Welcome() {
  const newState = useRecoilValue(state);
  return (
    <div className={css.root}>
      <h3 className={css.title} data-test="welcome-title">
        ¡Welcome!{" "}
      </h3>
      <span>
        To see the pets reported near you... we need permission to know your
        location
      </span>
      <Link to="/home" data-test="link-search">
        <ButtonGeneric>Search</ButtonGeneric>
      </Link>
      <Link to="/login" data-test="link-login">
        <ButtonGeneric>Login</ButtonGeneric>
      </Link>
      <Link to="/register" data-test="link-register">
        <ButtonGeneric>Register</ButtonGeneric>
      </Link>
    </div>
  );
}
