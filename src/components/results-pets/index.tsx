import React from "react";
import css from "./results.css";

export function ResultsPets({ pictureURL, name, raza, location }) {
  return (
    <div className={css.root}>
      <img src={pictureURL} className={css.image} />
      <span>Nombre: {name} </span>
      <span>Raza: {raza}</span>
      <span>Location: {location}</span>
      <a>Reportar</a>
    </div>
  );
}
