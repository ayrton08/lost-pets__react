import { atom } from "recoil";

export const idPet = atom({
  key: "id",
  default: {},
});

export async function updateReport(dataForm: Object, token, idPet) {
  const id = idPet;
  const res = await fetch(`http://localhost:3000/api/v1/pets/update/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify({ dataForm }),
  });
  const data = await res.json();
}
