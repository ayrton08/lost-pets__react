export async function sendInfoPet(params: object) {
  const res = await fetch(
    `https://lost-pets-production.up.railway.app/api/v1/users/info-pet`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await res.json();
  return data;
}
