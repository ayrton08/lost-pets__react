import React, { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import css from "./register.css";

export function RegisterForm() {
  return (
    <form className={css.root}>
      <label>
        <h3>Fullname</h3>
        <input />
      </label>

      <label>
        <h3>Email</h3>
        <input />
      </label>

      <label>
        <h3>Password</h3>
        <input />
      </label>
      <label>
        <input />
      </label>
      <button>🙈</button>

      <button>Register</button>
    </form>
  );
}
