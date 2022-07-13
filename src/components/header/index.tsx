import React, { useState, useEffect, useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import css from "./header.css";
import { MenuModal } from "../menu-modal";
import { useModal } from "../../hooks/useModal";
import { state } from "../../hooks/useDataUser";
import { useRecoilState, useRecoilValue } from "recoil";
import { ButtonClose } from "../../ui/button-close-session/button-close-session";

export function Header() {
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal } = useModal(false);
  const [stateUser, setStateUser] = useRecoilState(state);

  function closeSession(e) {
    e.preventDefault();
    setStateUser(false);
    localStorage.removeItem("token");
    closeModal();
    return navigate("/", { replace: true });
  }
  // useEffect(() => {
  //   console.log("stateUser Effect", stateUser);
  // }, [stateUser]);

  return (
    <div>
      <header className={css.root}>
        <Link to="/home" className={css.logo}>
          🐶
        </Link>
        <button className={css.btn} onClick={openModal}>
          ☰
        </button>
        {!stateUser ? (
          <MenuModal isOpen={isOpen} closeModal={closeModal}>
            <Link to="/login" onClick={closeModal} className={css.links}>
              Sing in to you account
            </Link>
            <Link to="/register" onClick={closeModal} className={css.links}>
              Creat an account
            </Link>
          </MenuModal>
        ) : (
          <MenuModal isOpen={isOpen} closeModal={closeModal}>
            <Link to="/my-data" onClick={closeModal} className={css.links}>
              My Data
            </Link>
            <Link to="/my-reports" onClick={closeModal} className={css.links}>
              My Reports
            </Link>
            <Link to="/report-pet" onClick={closeModal} className={css.links}>
              Report Pets
            </Link>
            <ButtonClose closeSession={closeSession}></ButtonClose>
          </MenuModal>
        )}
      </header>
      <Outlet></Outlet>
    </div>
  );
}
