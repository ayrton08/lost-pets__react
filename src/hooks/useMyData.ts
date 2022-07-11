export async function updateMyData(fullname?, password?) {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log("token", token);

  const sendFormUpdate = await fetch(
    `https://dwf-m7-postgre.herokuapp.com/api/v1/users/update`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({ fullname, password }),
    }
  );
  const dataForm = await sendFormUpdate.json();
  return dataForm;
}
