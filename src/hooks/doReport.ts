export async function doReport(dataForm: Object, token: String) {
  const res = await fetch(`http://localhost:3000/api/v1/pets/report-pet`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify(dataForm),
  });
  const data = await res.json();
  return data;
}
