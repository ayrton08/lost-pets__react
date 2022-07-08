import * as React from "react";
import css from "./modal-report.css";
import { TextField } from "../../ui/text-field";
import { ButtonForm } from "../../ui/button-form/ButtonForm";

type ModalReport = {
  isOpen: boolean;
  closeModal: () => void;
  name: string;
  img: string;
};

export function ModalReport(props: ModalReport) {
  return (
    <div className={`${css.root} ${props.isOpen && css.open}`}>
      <div className={css.container}>
        <button onClick={props.closeModal} className={css.close}>
          🐾
        </button>
        <form className={css.form}>
          <span className={css.title}>{props.name}</span>
          <img src={props.img} className={css.image}></img>
          <TextField
            type="text"
            name="fullname"
            placeholder="Your Name"
          ></TextField>
          <TextField
            type="text"
            name="cellphone"
            placeholder="Your Cellphone"
          ></TextField>

          <span className={css.text}>¿Where did you see it?</span>
          <textarea name="last-place" className={css.textarea} placeholder="Write a place"></textarea>
          <ButtonForm>Send</ButtonForm>
        </form>
      </div>
    </div>
  );
}
