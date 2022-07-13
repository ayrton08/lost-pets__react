import React, { useState } from "react";
import css from "./my-reports.css";
import { useResultsPets } from "../../hooks/useResultsPets";
import { ResultsPets } from "../../components/results-pets";
import { Loader } from "../../ui/loader/loader";
import { ModalReport } from "../../components/modal-report";
import { useModal } from "../../hooks/useModal";
import { useMyReports } from "../../hooks/useMyReports";

export function MyReports() {
  const [dataPet, setDataPet] = useState({});
  const { isOpen, openModal, closeModal } = useModal(false);

  const myReports = useMyReports() || [];

  return (
    <div className={css.root}>
      <h2 className={css.title}>My Reports</h2>
      <div>
        {myReports.length === 0 ? (
          <div className={css.root}>
            <Loader />
          </div>
        ) : (
          <div className={css.card}>
            {myReports.map((r) => {
              console.log("datos de respues", r);
              return (
                <ResultsPets
                  key={r.id}
                  content="Edit"
                  pictureURL={r.pictureURL}
                  name={r.name}
                  raza={r.raza}
                  location={r.location}
                  report={() => {
                    openModal();
                    setDataPet({
                      id: r.objectID,
                      name: r.name,
                      raza: r.raza,
                      pictureURL: r.pictureURL,
                    });
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
            })}
          </div>
        )}
      </div>
    </div>
  );
}
