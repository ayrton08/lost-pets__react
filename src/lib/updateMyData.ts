export async function updateMyData(fullname: string, password: string) {
  const token = JSON.parse(localStorage.getItem("token"));

  const sendFormUpdate = await fetch(
    `https://lost-pets-production.up.railway.app/api/v1/users/update`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({ fullname, password }),
    }
  );
  const dataForm = await sendFormUpdate.json();
  return dataForm;
}
