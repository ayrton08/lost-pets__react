import * as React from "react";
import css from "./hide-text.css";

type Hide = {
  hide: () => void;
};

export function HideText(props: Hide) {
  return (
    <label className={css.switch} onClick={props.hide}>
      <input type="checkbox" />
      <span className={css.slider}></span>
    </label>
  );
}
