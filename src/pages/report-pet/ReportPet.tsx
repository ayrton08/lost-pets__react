import React, { useState } from "react";
import css from "./report-pet.css";
import { useResultsPets } from "../../hooks/useResultsPets";
import { Loader } from "../../ui/loader/loader";
import { useModal } from "../../hooks/useModal";

export function ReportPet() {
  const results = useResultsPets();

  return (
    <div className={css.root}>
      <h2>Report Pet</h2>
      <div className={css.card}>
        {
          results.length === 0 ? (
            <div className={css.root}>
              <Loader />
            </div>
          ) : null
          // results.map((r) => {
          //   return (
          //     <ResultsPets
          //       key={r.objectID}
          //       pictureURL={r.pictureURL}
          //       name={r.name}
          //       raza={r.raza}
          //       location={r.location}
          //       report={() => {
          //         openModal();
          //         setDataPet({
          //           id: r.objectID,
          //           name: r.name,
          //           raza: r.raza,
          //           pictureURL: r.pictureURL,
          //         });
          //       }}
          //     >
          //       <ModalReport
          //         isOpen={isOpen}
          //         closeModal={closeModal}
          //         name={dataPet["name"]}
          //         img={dataPet["pictureURL"]}
          //       />
          //     </ResultsPets>
          //   );
          // })
        }
      </div>
    </div>
  );
}
