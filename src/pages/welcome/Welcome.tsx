import React, { useState, useEffect, useContext, Suspense } from "react";
import { Link } from "react-router-dom";
import { nameState } from "../../hooks/atoms";
import { useRecoilValue } from "recoil";
import css from "./welcome.css";

export function Welcome() {
  return (
    <div className={css.root}>
      <h3>¡Welcome!</h3>
      <span>
        To see the pets reported near you... we need permission to know your
        location
      </span>
      <Link to="/home">
        <button>Give Location</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
}
