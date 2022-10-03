import React, { FormEvent } from "react";
import css from "./login.css";
// import { TextField } from "../../ui/text-field/index";
import { ButtonForm } from "../../ui/button-form/ButtonForm";

import { Formik, Form } from "formik";
import { MyTextInput } from "../../ui/text-field/MyTextInput";
import * as Yup from "yup";
import { CircularProgress } from "@mui/material";

type LoginForm = {
  onLogin: (params: { email: string; password: string }) => any;
  error: String;
  isLoging?: boolean;
};

const initialValues = {
  email: "",
  password: "",
};

export function LoginForm({ error, onLogin, isLoging }: LoginForm) {
  function onSubmitHandler(values) {
    onLogin({
      ...values,
    });
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(value: any) => {
          onSubmitHandler(value);
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required("The email is required")
            .email("Check the email format"),
          password: Yup.string().required("The password is required"),
        })}
      >
        {(value) => (
          <Form className={css.root}>
            <MyTextInput type="email" name="email" placeholder="Email" />
            <MyTextInput
              type="password"
              name="password"
              placeholder="Password"
            />

            <div className={css.error}>{error}</div>
            <ButtonForm type="submit">Login</ButtonForm>
          </Form>
        )}
      </Formik>
      {isLoging && (
        <div className="loader">
          <CircularProgress color="success" size={60} />
          <span>Loading...</span>
        </div>
      )}
    </>
  );
}
