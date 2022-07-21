import { atom } from "recoil";

export const idPet = atom({
  key: "id",
  default: {},
});

export async function updateReport(dataForm: Object, token, idPet) {
  const id = idPet;
  const res = await fetch(
    `https://dwf-m7-postgre.herokuapp.com/api/v1/pets/update/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({ dataForm }),
    }
  );
  const data = await res.json();
}
