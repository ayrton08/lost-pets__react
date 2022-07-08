import React from "react";
import css from "./results.css";

export function ResultsPets({
  pictureURL,
  name,
  raza,
  location,
  report,
  children,
}) {
  return (
    <div
      className={window.location.pathname === "/home" ? css.card : css.mycard}
    >
      <img src={pictureURL} className={css.img} />
      <span className={css.job}>Nombre: {name} </span>
      <span>Raza: {raza}</span>
      <span>Location: {location}</span>
      <a className={css.button} onClick={report}>
        Reportar
      </a>
      {children}
    </div>
  );
}
