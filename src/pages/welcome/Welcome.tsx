import React, { useState, useEffect, useContext, Suspense } from "react";
import { Link } from "react-router-dom";
import css from "./welcome.css";

export function Welcome() {
  function location() {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      console.log(lat, lng);
    });
  }

  return (
    <div className={css.root}>
      <h3>¡Welcome! </h3>
      <span>
        To see the pets reported near you... we need permission to know your
        location
      </span>
      <Link to="/home">
        <button onClick={location}>Give Location</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
}
