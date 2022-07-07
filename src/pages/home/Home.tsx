import React, { useState, useEffect, useContext, Suspense } from "react";
import css from "./home.css";
import { useResultsPets } from "../../hooks/useResultsPets";
import { ResultsPets } from "../../components/results-pets";
import { Loader } from "../../ui/loader/loader";

export function Home() {
  const results = useResultsPets();

  return (
    <div className={css.root}>
      Home
      <div className={css.card}>
        {results.length === 0 ? (
          <div className={css.root}>
            <Loader />
          </div>
        ) : (
          results.map((r) => {
            return (
              <ResultsPets
                key={r.objectID}
                pictureURL={r.pictureURL}
                name={r.name}
                raza={r.raza}
                location={r.location}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
