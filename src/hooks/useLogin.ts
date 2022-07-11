import { atom, selector, useRecoilState } from "recoil";
import { useEffect } from "react";


export async function useLogin(email: String, password: String) {
  const loginFetch = await fetch(
    `https://dwf-m7-postgre.herokuapp.com/api/v1/auth/signin`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );
  if (loginFetch.status === 400) {
    return null
  }
  const res = await loginFetch.json();
  return res;
}
