import React, { useState, useEffect, useContext, Suspense } from "react";
import { Link } from "react-router-dom";
import { nameState } from "../../hooks/atoms";
import { useRecoilValue } from "recoil";
import css from "./home.css";
// import { MyContext } from "..";

export function Home() {
  // const data = useContext(MyContext);

  const name = useRecoilValue(nameState);
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // }, []);
  return (
    <div>
      Data: {name}
      <Link to={"/home"}>
        <button>Ir a Login</button>
      </Link>
    </div>
  );
}
