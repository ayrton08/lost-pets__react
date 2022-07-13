import React, { useEffect, useState } from "react";
import css from "./home.css";
import { useResultsPets } from "../../hooks/useResultsPets";
import { ResultsPets } from "../../components/results-pets";
import { Loader } from "../../ui/loader/loader";
import { ModalReport } from "../../components/modal-report";
import { useModal } from "../../hooks/useModal";
import { sendInfoPet } from "../../hooks/sendInfoPet";
import { findById } from "../../hooks/findById";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const results = useResultsPets();
  const [dataPet, setDataPet] = useState({
    id: null,
    name: "",
    raza: "",
    pictureURL: "",
  });
  const { isOpen, openModal, closeModal } = useModal(false);
  const [dataComplete, setDataComplete] = useState({});

  const search = async () => {
    if (dataPet.id) {
      const res = await findById(dataPet.id);
      setDataComplete(res);
      return res;
    }
  };

  useEffect(() => {
    search();
  }, [dataPet]);

  function result() {
    closeModal();

    const Toast = Swal.mixin({
      toast: true,
      position: "bottom",
      background: "#2471A3",
      color: "#D6EAF8",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Report sent successfully",
    });
  }

  async function onSubmitHandler(dataForm) {
    !dataForm.fullname && alert("Falta el nombre");
    !dataForm.cellphone && alert("Falta el cellphone");
    !dataForm.info && alert("¿Donde lo viste?");
    const data = {
      ...dataForm,
      title: dataComplete["name"],
      emailOwner: dataComplete["email"],
    };
    const fetch = await sendInfoPet(data);
    fetch.email && result();
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
