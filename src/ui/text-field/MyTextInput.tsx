import React from "react";
import { useField, ErrorMessage } from "formik";
import css from "./text-field.css";

interface Props {
  label?: string;
  name: string;
  type?: "text" | "email" | "password" | "checkbox" | "input";
  placeholder?: string;
  [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className={`${css.input} text-input`} {...field} {...props} />
      <ErrorMessage name={props.name} component="span" className="error" />
    </>
  );
};
