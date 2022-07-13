import React, { useEffect, useState } from "react";
import css from "./home.css";
import { useResultsPets } from "../../hooks/useResultsPets";
import { ResultsPets } from "../../components/results-pets";
import { Loader } from "../../ui/loader/loader";
import { ModalReport } from "../../components/modal-report";
import { useModal } from "../../hooks/useModal";
import { sendInfoPet } from "../../hooks/sendInfoPet";
import { findById } from "../../hooks/findById";

export function Home() {
  const results = useResultsPets();
  const [dataPet, setDataPet] = useState({
    id: null,
    name: "",
    raza: "",
    pictureURL: "",
  });

  const [dataComplete, setDataComplete] = useState({});

  const search = async () => {
    if (dataPet.id) {
      const res = await findById(dataPet.id);
      console.log("respuesta segun id", res);
      console.log("state", dataPet);
      setDataComplete(res);
      return res;
    }
  };
  console.log(" new state", dataComplete);

  useEffect(() => {
    search();
  }, [dataPet]);

  const { isOpen, openModal, closeModal } = useModal(false);

  async function onSubmitHandler(dataForm) {
    !dataForm.fullname && alert("Falta el nombre");
    !dataForm.cellphone && alert("Falta el cellphone");
    !dataForm.info && alert("¿Donde lo viste?");
    const data = {
      ...dataForm,
      title: dataComplete["name"],
      emailOwner: dataComplete["email"],
    };
    console.log("data", data);
    console.log("data form info report", dataForm);
    const fetch = await sendInfoPet(data);
    console.log("respuesta", fetch);
    console.log("datPet", dataPet);
  }

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
                    onReport={(val) => onSubmitHandler(val)}
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
