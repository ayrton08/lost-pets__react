export async function doReport(dataForm: object, token: string) {
  const res = await fetch(
    `https://dwf-m7-postgre.herokuapp.com/api/v1/pets/report-pet`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify(dataForm),
    }
  );
  const data = await res.json();
  return data;
}
