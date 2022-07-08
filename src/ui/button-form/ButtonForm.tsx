import React from "react";
import css from "./button-form.css";

export function ButtonForm({ children }) {
  return (
    <div className={css.container}>
      <button className={css.button}>{children}</button>
    </div>
  );
}
