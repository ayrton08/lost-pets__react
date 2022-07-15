import React from "react";
import { FormMyData } from "../../components/form-my-data";
import { updateMyData } from "../../hooks/useMyData";
import { useRecoilState, useRecoilValue } from "recoil";
import { state, useDataUser } from "../../lib/dataUser";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../hooks/useLogin";
import { result } from "../../lib/sendFormModal";
import css from "./my-data.css";

export function MyData() {
  const navigate = useNavigate();

  const stateLogin = useRecoilValue(state);
  const [dataUser, setDataUser] = useRecoilState(login);

  async function newData(dataForm) {
    if (dataForm.password !== dataForm.passwordRepeat) {
      return alert("Contraseñas no coinciden");
    }
    await updateMyData(dataForm.fullname, dataForm.password);
    const newData = await useDataUser();
    setDataUser(newData);
    result("Updated data");
    navigate("/home", { replace: true });
  }

  const token = localStorage.getItem("token");

  return (
    <div className={css.root}>
      {!token ? (
        <Navigate to="/login" replace={true} />
      ) : (
        <FormMyData myData={(val) => newData(val)} />
      )}
    </div>
  );
}
