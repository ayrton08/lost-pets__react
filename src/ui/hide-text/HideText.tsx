import * as React from "react";
import css from "./hide-text.css";

type Hide = {
  hide: () => void;
};

export function HideText({ hide }: Hide) {
  return (
    <label className={css.switch}>
      <input type="checkbox" onClick={hide} />
      <span className={css.slider}></span>
    </label>
  );
}
