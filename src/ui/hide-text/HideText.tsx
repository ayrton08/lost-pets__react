import * as React from "react";
import css from "./hide-text.css";

export function HideText() {
  return (
    <label className={css.switch}>
      <input type="checkbox" />
      <span className={css.slider}></span>
    </label>
  );
}
