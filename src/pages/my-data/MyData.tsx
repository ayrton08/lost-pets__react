import React, { useState } from "react";
import { FormMyData } from "../../components/form-my-data";
import { updateMyData } from "../../lib/updateMyData";
import { useRecoilState } from "recoil";
import { dataUser } from "../../lib/dataUser";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../hooks/useLogin";
import { result } from "../../lib/sendFormModal";
import css from "./my-data.css";

export function MyData() {
  const navigate = useNavigate();
  const [isUpdating, setIsUpdating] = useState(false);

  const [, setDataUserState] = useRecoilState(login);

  async function newData(dataForm) {
    setIsUpdating(true);
    await updateMyData(dataForm.fullname, dataForm.password1);
    const newData = await dataUser();
    setDataUserState(newData);
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
