import React, { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import css from "./login.css";

export function LoginForm() {
  return (
    <form className={css.root}>
      <label>
        <h3>Email</h3>
        <input />
      </label>
      <label>
        <h3>Password</h3>
        <input />
        <div></div>
      </label>
      <button>Login</button>
    </form>
  );
}
