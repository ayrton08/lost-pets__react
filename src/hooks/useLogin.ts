import { atom } from "recoil";

export const login = atom({
  key: "login",
  default: false,
});

export async function useLogin(email: string, password: string) {
  const loginFetch = await fetch(
    `https://lost-pets-production.up.railway.app/api/v1/auth/signin`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email, password }),
    }
  );
  if (loginFetch.status === 400) {
    return null;
  }
  const res = await loginFetch.json();
  return res;
}
