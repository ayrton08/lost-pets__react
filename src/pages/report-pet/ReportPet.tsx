import React, { useState } from "react";
import css from "./report-pet.css";
import { ReportForm } from "../../components/form-report";
import { doReport } from "../../lib/doReport";
import { useParams } from "react-router-dom";
import { updateReport } from "../../hooks/updateReport";
import { result } from "../../lib/sendFormModal";
import { useNavigate } from "react-router-dom";

export function ReportPet() {
  const navigate = useNavigate();
  const [isSending, setIsSending] = useState(false);
  const token = JSON.parse(localStorage.getItem("token"));

  const params = useParams();

  async function reportPet(dataForm) {
    setIsSending(true);
    if (
      !dataForm.name ||
      !dataForm.raza ||
      !dataForm.pictureURL ||
      !dataForm.location ||
      !dataForm.lat ||
      !dataForm.lng
    ) {
      return alert("Faltan datos en el report");
    }

    const res = await doReport(dataForm, token);
    setIsSending(false);
    result("Successful Report");
    return navigate("/my-reports", { replace: true });
  }

  async function updatePet(dataForm) {
    const res = await updateReport(dataForm, token, params.id);
    result("Successful Update");
    return navigate("/my-reports", { replace: true });
  }

  return params.id ? (
    <div className={css.edit}>
      <h2 className={css.title}>Edit Report</h2>
      <ReportForm
        report={(val) => updatePet(val)}
        children={isSending ? "Sending..." : "Update"}
      ></ReportForm>
    </div>
  ) : (
    <div className={css.root}>
      <h2 className={css.title}>Report</h2>
      <ReportForm
        report={(val) => reportPet(val)}
        children={isSending ? "Sending..." : "Report"}
      ></ReportForm>
    </div>
  );
}
