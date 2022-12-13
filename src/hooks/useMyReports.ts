/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

export function useMyReports(): Array<any> {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    reportsFetch();
  }, []);

  async function reportsFetch() {
    setIsLoading(true);
    const res = await fetch(
      `https://lost-pets-production.up.railway.app/api/v1/users/my-pets`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    setIsLoading(false);
    setReports(data);
    return data;
  }
  return [reports, isLoading];
}
