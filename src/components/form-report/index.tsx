import React from "react";
import css from "./report-form.css";
import { ButtonForm } from "../../ui/button-form/ButtonForm";
import { TextField } from "../../ui/text-field";
import { DropZone } from "../drop-zone";

type ReportForm = {
  report?: (params: {
    fullname?: string;
    email?: string;
    password?: string;
  }) => any;
  error?: String;
};

export function ReportForm(props: ReportForm) {
  function onSubmitHandler(e) {
    e.preventDefault();
    const fullname = e.target.fullname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    props.report({
      fullname,
      email,
      password,
    });
  }

  return (
    <form className={css.root} onSubmit={onSubmitHandler}>
      <TextField type="text" name="name" placeholder="Name" />
      <TextField type="text" name="raza" placeholder="Race" />
      <div>{/* <DropZone /> */}</div>
      <span>
        By default the location where you are will be reported, if you wish to
        indicate another location in the report you can do so on the map below.
      </span>

      <ButtonForm>Report</ButtonForm>
      <ButtonForm>Cancel</ButtonForm>
    </form>
  );
}
