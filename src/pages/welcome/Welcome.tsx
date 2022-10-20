import React from "react";
import { Link } from "react-router-dom";
import css from "./welcome.css";
import { ButtonGeneric } from "../../ui/buttons-generic/button-generic";

export function Welcome() {
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
