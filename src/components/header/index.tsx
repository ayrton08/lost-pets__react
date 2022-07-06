import React, { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import css from "./header.css";
import { MenuModal } from "../menu-modal";
import { useModal } from "../../hooks/useModal";

export function Header() {
  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <div>
      <header className={css.root}>
        <div className={css.logo}>🐶</div>
        <button onClick={openModal}>☰</button>
        <MenuModal isOpen={isOpen} closeModal={closeModal}>
          <a>Sing in to you account</a>
          <a>Creat an account</a>
        </MenuModal>
      </header>
      <Outlet></Outlet>
    </div>
  );
}
