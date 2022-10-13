export async function findById(id: string) {
  if (isNaN(+id)) throw new Error("Parameters is not a valid number");

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
  const result = await res.json();
  return result;
}
