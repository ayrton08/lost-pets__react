import React, { useState, useEffect, useContext, Suspense } from "react";
import { Link } from "react-router-dom";
import { nameState } from "../../hooks/atoms";
import { useRecoilValue } from "recoil";
import css from "./login.css";
import { LoginForm } from "../../components/login-comp";

export function Register() {
  return <div>Register</div>;
}
