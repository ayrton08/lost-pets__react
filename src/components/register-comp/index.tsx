/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import css from "./register.css";
import { ButtonForm } from "../../ui/button-form/ButtonForm";
import { HideText } from "../../ui/hide-text/HideText";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../../ui/text-field/MyTextInput";

import { LoaderMaterial } from "../../ui/loader/LoaderMaterial";

type RegisterForm = {
  onRegister: (params: {
    fullname: string;
    email: string;
    password: string;
    password2: string;
  }) => any;
  error: string;
  isRegistering?: boolean;
};

interface InitialValues {
  fullname: string;
  email: string;
  password: string;
  password2: string;
}

const initialValues: InitialValues = {
  fullname: "",
  email: "",
  password: "",
  password2: "",
};

export function RegisterForm({ onRegister, isRegistering }: RegisterForm) {
  const [typeInput, setTypeInput] = useState(false);

  const changeType = () => {
    typeInput ? setTypeInput(false) : setTypeInput(true);
  };

  function onSubmitHandler(values) {
    onRegister({
      ...values,
    });
  }
  console.log(isRegistering);
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(value: any) => {
          onSubmitHandler(value);
        }}
        validationSchema={Yup.object({
          fullname: Yup.string()
            .required("Name is required")
            .min(2, "Must contain at least 2 characters"),
          email: Yup.string()
            .required("Email is required")
            .email("Check the email format"),
          password: Yup.string()
            .required("Name is required")
            .min(6, "Must contain at least 6 characters"),
          password2: Yup.string()
            .required("Password repetead is required")
            .oneOf([Yup.ref("password")], "Passwords are not the same"),
        })}
      >
        {() => (
          <Form className={css.root}>
            <MyTextInput type="text" name="fullname" placeholder="Fullname" />
            <MyTextInput type="email" name="email" placeholder="Email" />
            <MyTextInput
              type={typeInput ? "text" : "password"}
              name="password"
              placeholder="Password"
            />
            <MyTextInput
              type={typeInput ? "text" : "password"}
              name="password2"
              placeholder="Repite Password"
            />
            <HideText hide={changeType} />

            <ButtonForm type="submit">Register</ButtonForm>
          </Form>
        )}
      </Formik>
      {isRegistering && <LoaderMaterial />}
    </>
  );
}
