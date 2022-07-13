import React from "react";
import css from "./results.css";

export function ResultsPets({
  pictureURL,
  name,
  raza,
  location,
  report,
  children,
  content,
}) {
  return (
    <div
      className={window.location.pathname === "/home" ? css.card : css.mycard}
    >
      <img src={pictureURL} className={css.img} />
      <span className={css.job}>{name}</span>
      <span className={css.span}>Raza: {raza}</span>
      <span className={css.span}>Location: {location}</span>
      <a className={css.button} onClick={report}>
        {content}
      </a>
      {children}
    </div>
  );
}
