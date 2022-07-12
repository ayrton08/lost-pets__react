import { atom } from "recoil";

export const state = atom({
  key: "loginState",
  default: false,
});

export async function useDataUser(token: string) {
  const res = await fetch(
    `https://dwf-m7-postgre.herokuapp.com/api/v1/auth/my-data`,
    {
      method: "GET",
      headers: {
        Authorization: `bearer ${token}`,
      },
    }
  );
  const dataForm = await res.json();
  return dataForm;
}
