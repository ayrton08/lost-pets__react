import * as React from "react";
import css from "./modal-report.css";
import { TextField } from "../../ui/text-field";
import { ButtonForm } from "../../ui/button-form/ButtonForm";

type ModalReport = {
  isOpen: boolean;
  closeModal: () => void;
  name: string;
  img: string;
  onReport?: (params: {
    fullname: string;
    cellphone: string;
    info: string;
  }) => any;
};

export function ModalReport(props: ModalReport) {
  function onSubmitHandler(e) {
    e.preventDefault();
    const fullname = e.target.fullname.value;
    const cellphone = e.target.cellphone.value;
    const info = e.target.info.value;
    props.onReport({
      fullname,
      cellphone,
      info,
    });
  }

  return (
    <div className={`${css.root} ${props.isOpen && css.open}`}>
      <div className={css.container}>
        <button onClick={props.closeModal} className={css.close}>
          🐾
        </button>
        <form className={css.form} onSubmit={onSubmitHandler}>
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
          <textarea
            name="info"
            className={css.textarea}
            placeholder="Write a place"
          ></textarea>
          <ButtonForm>Send</ButtonForm>
        </form>
      </div>
    </div>
  );
}
