import React, { useRef } from "react";
import css from "./form-my-data.css";
import { login } from "../../hooks/useLogin";
import { useRecoilValue } from "recoil";
import { TextField } from "../../ui/text-field";
import { ButtonForm } from "../../ui/button-form/ButtonForm";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../../ui/text-field/MyTextInput";
import { CircularProgress } from "@mui/material";
import { LoaderMaterial } from "../../ui/loader/LoaderMaterial";

type FormMyData = {
  myData: (params: {
    fullname: string;
    password?: string;
    passwordRepeat?: string;
  }) => any;
  isUpdating?: boolean;
};

const initialValues = {
  fullname: "",
  password1: "",
  password2: "",
};

export function FormMyData({ myData, isUpdating }: FormMyData) {
  const stateLogin = useRecoilValue(login);

  function onSubmitHandler(values) {
    myData({
      ...values,
    });
  }
  return (
    <>
      <h2 className={css.title}>Your Information</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          onSubmitHandler(values);
        }}
        validationSchema={Yup.object({
          fullname: Yup.string().min(2, "Must contain at least 2 characters"),
          password1: Yup.string().min(6, "Must contain at least 6 characters"),
          password2: Yup.string().oneOf(
            [Yup.ref("password1")],
            "Passwords are not the same"
          ),
        })}
      >
        {(formik) => (
          <Form className={css.root}>
            <MyTextInput
              name="fullname"
              type="text"
              placeholder={stateLogin["fullname"]}
            />
            <MyTextInput
              name="email"
              type="text"
              placeholder={stateLogin["email"]}
            />
            <MyTextInput
              name="password1"
              type="password"
              placeholder="New password"
            />
            <MyTextInput
              name="password2"
              type="password"
              placeholder="Repeat new password"
            />
            <ButtonForm type="submit">Save</ButtonForm>
          </Form>
        )}
      </Formik>
      {!stateLogin["fullname"] && <LoaderMaterial />}
      {isUpdating && <LoaderMaterial message="Updating" />}
    </>
  );
}
