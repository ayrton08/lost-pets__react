import React, { useState, useEffect } from "react";
import { FormMyData } from "../../components/form-my-data";
import { updateMyData } from "../../hooks/useMyData";
import { useRecoilValue } from "recoil";
import { state } from "../../hooks/useDataUser";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export function MyData() {
  const stateLogin = useRecoilValue(state);
  const navigate = useNavigate();
  
  function result() {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom",
      background: "#2471A3",
      color: "#D6EAF8",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Updated data",
    });

    navigate("/home", { replace: true });
  }

  async function newData(dataForm) {
    if (dataForm.password !== dataForm.passwordRepeat) {
      return alert("Contraseñas no coinciden");
    }
    await updateMyData(dataForm.fullname, dataForm.password);
    result();
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
