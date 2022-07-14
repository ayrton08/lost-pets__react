import React, { useState } from "react";
import css from "./report-pet.css";
import { ReportForm } from "../../components/form-report";
import { doReport } from "../../hooks/doReport";
import { useParams } from "react-router-dom";
import { updateReport } from "../../hooks/updateReport";
import { result } from "../../hooks/senfFormModal";
import { useNavigate } from "react-router-dom";

export function ReportPet() {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));

  const params = useParams();
  params.id && console.log("soy params");
  console.log("params", params);

  async function reportPet(dataForm) {
    console.log("dataform", dataForm);
    if (
      !dataForm.name &&
      !dataForm.raza &&
      !dataForm.pictureURL &&
      !dataForm.location &&
      !dataForm.lat &&
      !dataForm.lng
    ) {
      return alert("Faltan datos en el report");
    }

    await doReport(dataForm, token);
    result("Successful Report");
    return navigate("/my-reports", { replace: true });
  }

  async function updatePet(dataForm) {
    await updateReport(dataForm, token, params.id);
    result("Successful Update");
    return navigate("/my-reports", { replace: true });
  }

  return params.id ? (
    <div className={css.edit}>
      <h2 className={css.title}>Edit Report</h2>
      <ReportForm report={(val) => updatePet(val)}></ReportForm>
    </div>
  ) : (
    <div className={css.root}>
      <h2 className={css.title}>Report</h2>
      <ReportForm report={(val) => reportPet(val)}></ReportForm>
    </div>
  );
}
