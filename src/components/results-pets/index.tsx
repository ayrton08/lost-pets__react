/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";
import css from "./results.css";
import { updateReport } from "../../lib/updateReport";
import { idPet } from "../../lib/atoms";
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

  async function deletePet() {
    card.current.className = css.off;
    const token = JSON.parse(localStorage.getItem("token"));
    await updateReport({ state: false }, token, idReport);
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
