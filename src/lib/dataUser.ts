import { atom } from "recoil";

export async function dataUser() {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await fetch(
    `https://dwf-m7-postgre.herokuapp.com/api/v1/auth/my-data`,
    {
      method: "GET",
      headers: {
        Authorization: `bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  const dataForm = await res.json();
  return dataForm;
}
