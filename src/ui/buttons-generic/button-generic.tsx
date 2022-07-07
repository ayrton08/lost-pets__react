import * as React from "react";
import css from "./button-generic.css";

export function ButtonGeneric({ children }) {
  return (
    <button data-text="Awesome" className={css.button}>
      <span className={css["actual-text"]}>&nbsp;{children}&nbsp;</span>
      <span className={css["hover-text"]} aria-hidden="true">
        &nbsp;{children}&nbsp;
      </span>
    </button>
  );
}
