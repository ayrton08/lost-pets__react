import * as React from "react";
import css from "./logo.css";

export function Logo() {
  return (
    <div className={css.dog}>
      <div className={css.ears}></div>

      <div className={css.body}>
        <div className={css.eyes}></div>
        <div className={css.beard}>
          <div className={css.mouth}>
            <div className={css.tongue}></div>
          </div>
        </div>
        <div className={css.belt}>
          <div className={css.locket}></div>
          <div className={`${css.dot} ${css.fot1}`}></div>
          <div className={`${css.dot} ${css.fot2}`}></div>

          <div className={`${css.dot} ${css.fot3}`}></div>
          <div className={`${css.dot} ${css.fot4}`}></div>
          <div className={css.tag}></div>
        </div>
        <div className={css.stomach}></div>
        <div className={css.legs}>
          <div className={css.left}></div>
          <div className={css.right}></div>
        </div>
      </div>
      <div className={css.tail}></div>
    </div>
  );

  {
    `${css.root} ${css.open}`;
  }
}
