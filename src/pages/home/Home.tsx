import React, { useState } from "react";
import css from "./home.css";
import { useResultsPets } from "../../hooks/useResultsPets";
import { ResultsPets } from "../../components/results-pets";
import { Loader } from "../../ui/loader/loader";
import { ModalReport } from "../../components/modal-report";
import { useModal } from "../../hooks/useModal";

export function Home() {
  const [dataPet, setDataPet] = useState({});
  const results = useResultsPets();
  const { isOpen, openModal, closeModal } = useModal(false);

  return (
    <div className={css.root}>
      <h2>Home</h2>
      <div>
        {results.length === 0 ? (
          <div className={css.root}>
            <Loader />
          </div>
        ) : (
          <div className={css.card}>
            {results.map((r) => {
              return (
                <ResultsPets
                  key={r.objectID}
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
