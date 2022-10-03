import React, { useState, useEffect, useContext, Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import css from "./register.css";
import { RegisterForm } from "../../components/register-comp";
import { register } from "../../helpers/handlerRegister";

type RegisterForm = {
  fullname: string;
  email: string;
  password: string;
  password2: string;
};

export function Register() {
  const navigate = useNavigate();

  const [isRegistering, setIsRegistering] = useState(false);

  async function handlerRegister({ email, fullname, password }: RegisterForm) {
    setIsRegistering(true);
    const data = await register({ fullname, password, email });
    setIsRegistering(false);
    data.registrado
      ? navigate("/login", { replace: true })
      : alert("Something went wrong in the registry, please try again");
  }

  return (
    <div className={css.root}>
      <h2 className={css.title}>Register</h2>
      <RegisterForm
        onRegister={(val) => handlerRegister(val)}
        error={undefined}
        isRegistering={isRegistering}
      />
    </div>
  );
}
