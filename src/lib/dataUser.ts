export async function dataUser() {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await fetch(
    `https://lost-pets-production.up.railway.app/api/v1/auth/my-data`,
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
