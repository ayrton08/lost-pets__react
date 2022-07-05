import React, { useState, useEffect, useContext } from "react";
import css from "./header.css";

export function Header() {
  return (
    <header className={css.root}>
      <div className={css.logo}>🐶</div>
      <div className={css.menu}>☰</div>
    </header>
  );
}
