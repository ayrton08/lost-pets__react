import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function SearchForm() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const query = e.target.query.value;
    navigate(`/search/${query}`, { replace: true });
    console.log(query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" id="" />
      <button>Buscar</button>
    </form>
  );
}
