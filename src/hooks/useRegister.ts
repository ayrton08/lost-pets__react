async function register(fullname: String, email: String, password: String) {
  const register = await fetch(
    `https://dwf-m7-postgre.herokuapp.com/api/v1/users`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullname, email, password }),
    }
  );
  const data = await register.json();
  return data;
}

export async function useRegister(dataForm) {
  const res = await register(
    dataForm.fullname,
    dataForm.email,
    dataForm.password
  );
  return res;
}
