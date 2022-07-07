import React from "react";

type TextFieldProps = {
  placeholder: string;
  type: string;
  name: string;
};

export function TextField(props: TextFieldProps) {
  const label = props.placeholder || props.name;
  return (
    <label>
      <h3>{label}</h3>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
    </label>
  );
}
