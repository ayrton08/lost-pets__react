import { useState, useEffect } from "react";

const token = JSON.parse(localStorage.getItem("token"));

export function useMyReports(): Array<any> {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    reportsFetch();
  }, []);

  async function reportsFetch() {
    setIsLoading(true);
    const res = await fetch(
      `https://dwf-m7-postgre.herokuapp.com/api/v1/users/my-pets`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
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
