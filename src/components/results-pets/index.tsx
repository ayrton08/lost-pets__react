import React from "react";
import css from "./results.css";

export function ResultsPets({ pictureURL, name, raza, location }) {
  return (
    <div className={css.card}>
      <img src={pictureURL} className={css.img} />
      <span className={css.job}>Nombre: {name} </span>
      <span>Raza: {raza}</span>
      <span>Location: {location}</span>
      <a className={css.button}>Reportar</a>
    </div>
  );
}
