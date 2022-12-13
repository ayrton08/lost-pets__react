interface Props {
  fullname: string;
  email?: string;
  password: string;
}
export const register = async ({ email, fullname, password }: Props) => {
  const res = await fetch(`https://lost-pets-production.up.railway.app/api/v1/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ fullname, email, password }),
  });

  const data = await res.json();
  return data;
};
