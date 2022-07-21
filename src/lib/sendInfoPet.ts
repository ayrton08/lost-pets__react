export async function sendInfoPet(params: {}) {
  const res = await fetch(
    `https://dwf-m7-postgre.herokuapp.com/api/v1/users/info-pet`,
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
