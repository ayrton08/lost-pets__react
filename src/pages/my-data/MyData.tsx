import React, { useState } from "react";
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
  const [isUpdating, setIsUpdating] = useState(false);

  const stateLogin = useRecoilValue(state);
  const [dataUser, setDataUser] = useRecoilState(login);

  async function newData(dataForm) {
    setIsUpdating(true);
    await updateMyData(dataForm.fullname, dataForm.password1);
    const newData = await useDataUser();
    setDataUser(newData);
    setIsUpdating(false);
    result("Updated data");
    navigate("/home", { replace: true });
  }

  const token = localStorage.getItem("token");

  return (
    <div className={css.root}>
      {!token ? (
        <Navigate to="/login" replace={true} />
      ) : (
        <FormMyData myData={newData} isUpdating={isUpdating} />
      )}
    </div>
  );
}
