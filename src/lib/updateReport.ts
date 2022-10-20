/* eslint-disable @typescript-eslint/no-explicit-any */
export async function updateReport(
  dataForm: any,
  token: string,
  idPet: string | object
) {
  const id = idPet;
  await fetch(`https://dwf-m7-postgre.herokuapp.com/api/v1/pets/update/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify({ dataForm }),
  });
}
