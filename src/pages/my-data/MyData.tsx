import React, { useState, useEffect } from "react";
import { FormMyData } from "../../components/form-my-data";
import { updateMyData } from "../../hooks/useMyData";
import { useRecoilValue } from "recoil";
import { state } from "../../hooks/useDataUser";
import { Navigate } from "react-router-dom";

export function MyData() {
  const stateLogin = useRecoilValue(state);

  async function newData(dataForm) {
    if (dataForm.password !== dataForm.passwordRepeat) {
      return alert("Contraseñas no coinciden");
    }
    await updateMyData(dataForm.fullname, dataForm.password);
  }

  return (
    <div>
      {!stateLogin ? (
        <Navigate to="/login" replace={true} />
      ) : (
        <FormMyData myData={(val) => newData(val)} />
      )}
    </div>
  );
}
