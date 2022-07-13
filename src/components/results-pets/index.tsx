import React, { useRef } from "react";
import css from "./results.css";
import { updateReport } from "../../hooks/updateReport";
import { idPet } from "../../hooks/updateReport";
import { useRecoilValue } from "recoil";

type ResultsPets = {
  pictureURL: string;
  name: string;
  raza: string;
  location: string;
  report: any;
  children: any;
  content: string;
  idPet?: any;
  drop?: any;
};

export function ResultsPets(props: ResultsPets) {
  const card = useRef(null);
  const idReport = useRecoilValue(idPet);

  async function deletePet(id) {
    card.current.className = css.off;
    const token = JSON.parse(localStorage.getItem("token"));
    console.log("token", token);
    const updateFetch = await updateReport({ state: false }, token, idReport);
    console.log("updateFetch", updateFetch);
    console.log("desde el card", card.current);
  }
  return (
    <div
      className={window.location.pathname === "/home" ? css.card : css.mycard}
      ref={card}
    >
      <button
        onClick={deletePet}
        className={window.location.pathname === "/home" ? css.off : css.on}
        onMouseOver={props.drop}
      >
        ❌
      </button>
      <img src={props.pictureURL} className={css.img} />
      <span className={css.job}>{props.name}</span>
      <span className={css.span}>Raza: {props.raza}</span>
      <span className={css.span}>Location: {props.location}</span>
      <a className={css.button} onClick={props.report}>
        {props.content}
      </a>
      {props.children}
    </div>
  );
}
