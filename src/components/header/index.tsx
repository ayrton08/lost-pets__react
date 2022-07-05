import React, { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import css from "./header.css";
import { MenuModal } from "../menu-modal";
import { useModal } from "../../hooks/useModal";

export function Header() {
  const [isOpen, openModal, closeModal] = useModal();
  console.log(useModal);

  function menuModal() {
    console.log("soy el menu modal");
    return (
      <div className={css.root}>
        <button>❌</button>
        <a>Sing in to you account</a>
        <a>Creat an account</a>
      </div>
    );
  }
  return (
    <div>
      <header className={css.root}>
        <div className={css.logo}>🐶</div>
        <button onClick={openModal}>☰</button>
        <MenuModal isOpen={isOpen} onClick={closeModal}>
          <div>Menu</div>
        </MenuModal>
      </header>
      <Outlet></Outlet>
    </div>
  );
}
