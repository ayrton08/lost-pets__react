import React, { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import css from "./header.css";

export function Header() {
  return (
    <div>
      <header className={css.root}>
        <div className={css.logo}>🐶</div>
        <div className={css.menu}>☰</div>
      </header>
      <Outlet></Outlet>
    </div>
  );
}
