import React from "react";
import css from "./button-form.css";

export function ButtonForm({ children, type }) {
  return (
    <div className={css.container}>
      <button type={type} className={css.button}>
        {children}
      </button>
    </div>
  );
}
