import React, { useState } from "react";
import css from "./report-pet.css";
import { ReportForm } from "../../components/form-report";

export function ReportPet() {
  async function reportPet(dataForm) {
    console.log("datos del fom report", dataForm);
  }

  return (
    <div className={css.root}>
      <ReportForm report={(val) => reportPet(val)}></ReportForm>
    </div>
  );
}
