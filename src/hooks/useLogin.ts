import { atom, selector, useRecoilState } from "recoil";
import { useEffect } from "react";

export const userState = atom({
  key: "textState",
  default: {},
});
export async function useLogin(email: String, password: String) {
  const sendFormLogin = await fetch(
    `https://dwf-m7-postgre.herokuapp.com/api/v1/auth/signin`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );
  const res = await sendFormLogin.json();
  return res;
}
