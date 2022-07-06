import React, { useState, useEffect, useContext, Suspense } from "react";
import css from "./home.css";
import { useResultsPets } from "../../hooks/useResultsPets";
import { ResultsPets } from "../../components/results-pets";

export function Home() {
  const results = useResultsPets();

  return (
    <div className={css.root}>
      Home
      <div>
        {results.length === 0
          ? null
          : results.map((r) => {
              return (
                <ResultsPets key={r.objectID}
                  pictureURL={r.pictureURL}
                  name={r.name}
                  raza={r.raza}
                  location={r.location}
                />
              );
            })}
      </div>
    </div>
  );
}
