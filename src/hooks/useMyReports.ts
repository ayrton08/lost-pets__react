import { useState, useEffect } from "react";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbG5hbWUiOiJheXJ0b24ganVhcmV6IiwiZW1haWwiOiJheXJ0b25qdWFyZXo5MEBnbWFpbC5jb20iLCJwaWN0dXJlVVJMIjpudWxsLCJsYXQiOm51bGwsImxuZyI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMi0wNi0yOFQxODoyOTowMS4wNTlaIiwidXBkYXRlZEF0IjoiMjAyMi0wNy0wOFQwNDozOToyNy41OTNaIiwiaWF0IjoxNjU3MjkxMTk2fQ.Havu1ZodhX30W1V2hwnDfp4QHxdSXrwoKuUNcDBe8wc";

export function useMyReports(): Array<any> {
  const [reports, setReports] = useState();

  useEffect(() => {
    reportsFetch();
  }, []);

  async function reportsFetch() {
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
    setReports(data);
    return data;
  }
  return reports;
}
