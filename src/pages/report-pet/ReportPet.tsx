import React, { useState } from "react";
import css from "./report-pet.css";
import { ReportForm } from "../../components/form-report";
import { doReport } from "../../hooks/doReport";

export function ReportPet() {
  const token = JSON.parse(localStorage.getItem("token"));
  async function reportPet(dataForm) {
    console.log("dataForm", dataForm);
    // const report = await doReport(dataForm, token);
  }

  return (
    <div className={css.root}>
      <ReportForm report={(val) => reportPet(val)}></ReportForm>
    </div>
  );
}
