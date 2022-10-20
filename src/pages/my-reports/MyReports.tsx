/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./my-reports.css";
import { ResultsPets } from "../../components/results-pets";
import { Loader } from "../../ui/loader/loader";
import { ModalReport } from "../../components/modal-report";
import { useModal } from "../../hooks/useModal";
import { useMyReports } from "../../hooks/useMyReports";
import { useRecoilState } from "recoil";
import { idPet } from "../../lib/atoms";

export function MyReports() {
  const navigate = useNavigate();
  const [dataPet] = useState({});
  const [, setIdPet] = useRecoilState(idPet);
  const { isOpen, closeModal } = useModal(false);

  const [myReports, isLoading] = useMyReports() || [];
  const haveReports =
    myReports.length > 0 && myReports.filter((dog) => dog.state);

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
