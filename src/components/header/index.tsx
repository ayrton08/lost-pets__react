import React, { useState, useEffect, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import css from "./header.css";
import { MenuModal } from "../menu-modal";
import { useModal } from "../../hooks/useModal";

export function Header() {
  const { isOpen, openModal, closeModal } = useModal(false);

  return (
    <div>
      <header className={css.root}>
        <Link to="home" className={css.logo}>
          🐶
        </Link>
        <button onClick={openModal}>☰</button>
        <MenuModal isOpen={isOpen} closeModal={closeModal}>
          <Link to="login" onClick={closeModal} className={css.links}>
            Sing in to you account
          </Link>
          <Link to="register" onClick={closeModal} className={css.links}>
            Creat an account
          </Link>
        </MenuModal>
      </header>
      <Outlet></Outlet>
    </div>
  );
}
