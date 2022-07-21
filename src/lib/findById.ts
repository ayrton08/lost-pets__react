export async function findById(id) {
  const res = await fetch(
    `https://dwf-m7-postgre.herokuapp.com/api/v1/pets/by-id/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  const pet = await res.json();
  return pet;
}
