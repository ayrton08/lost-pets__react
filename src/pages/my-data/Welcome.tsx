import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import css from "./welcome.css";
import { useDataUser } from "../../hooks/useDataUser";
import { loginState } from "../../hooks/useDataUser";
import { useRecoilState } from "recoil";
import { ButtonGeneric } from "../../ui/buttons-generic/button-generic";

export function Welcome() {
  const [stateUser, setStateUser] = useRecoilState(loginState);

  useEffect(() => {
    useDataUser().then((data) => {
      setStateUser(data);
    });
  }, []);
  console.log("state User", stateUser);

  return (
    <div className={css.root}>
      <h3>¡Welcome! </h3>
      <span>
        To see the pets reported near you... we need permission to know your
        location
      </span>
      <Link to="/home">
        <ButtonGeneric>Search</ButtonGeneric>
      </Link>
      <Link to="/login">
        <ButtonGeneric>Login</ButtonGeneric>
      </Link>
      <Link to="/register">
        <ButtonGeneric>Register</ButtonGeneric>
      </Link>
    </div>
  );
}
