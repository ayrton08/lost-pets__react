import React from "react";
import css from "./text-field.css";

type TextFieldProps = {
  placeholder: string;
  type: string;
  name: string;
};

export function TextField(props: TextFieldProps) {
  const label = props.placeholder || props.name;
  return (
    <label>
      <input
        className={css.input}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
    </label>
  );
}
