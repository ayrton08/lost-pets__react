import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import css from "./my-reports.css";
import { useResultsPets } from "../../hooks/useResultsPets";
import { ResultsPets } from "../../components/results-pets";
import { Loader } from "../../ui/loader/loader";
import { ModalReport } from "../../components/modal-report";
import { useModal } from "../../hooks/useModal";
import { useMyReports } from "../../hooks/useMyReports";
import { useRecoilState } from "recoil";
import { idPet } from "../../hooks/updateReport";

export function MyReports() {
  const navigate = useNavigate();
  const [dataPet, setDataPet] = useState({});
  const [id, setIdPet] = useRecoilState(idPet);
  const { isOpen, openModal, closeModal } = useModal(false);

  const [myReports, isLoading] = useMyReports() || [];
  const haveReports =
    myReports.length > 0 && myReports.filter((dog) => dog.state);

  console.log("myReports", myReports);

  return (
    <div className={css.root}>
      <h2 className={css.title}>My Reports</h2>
      <div>
        {isLoading ? (
          <div className={css.root}>
            <Loader />
          </div>
        ) : haveReports ? (
          <div className={css.card}>
            {myReports.map((r) => {
              if (r.state === "true") {
                return (
                  <ResultsPets
                    key={r.id}
                    content="Edit"
                    pictureURL={r.pictureURL}
                    name={r.name}
                    raza={r.raza}
                    location={r.location}
                    report={() => {
                      navigate(`/report-pet/${r.id}`, { replace: true });
                    }}
                    drop={() => {
                      setIdPet(r.id);
                    }}
                  >
                    <ModalReport
                      isOpen={isOpen}
                      closeModal={closeModal}
                      name={dataPet["name"]}
                      img={dataPet["pictureURL"]}
                    />
                  </ResultsPets>
                );
              }
            })}
          </div>
        ) : (
          <div className={css.message}>You don't have reports pets</div>
        )}
      </div>
    </div>
  );
}
