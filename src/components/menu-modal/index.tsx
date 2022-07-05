import * as React from "react";
import css from "./menu.css";

export function MenuModal({ children, isOpen, closeModal }) {
  return (
    <div className={`${css.root} ${isOpen && css.open}`}>
      <div className={css.container}>
        <button onClick={closeModal} className={css.close}>
          ❌
        </button>
        {children}
      </div>
    </div>
  );
}
