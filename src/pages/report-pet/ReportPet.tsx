import React, { useState } from "react";
import css from "./report-pet.css";
import { ReportForm } from "../../components/form-report";

export function ReportPet() {
  return (
    <div className={css.root}>
      <ReportForm></ReportForm>
    </div>
  );
}
