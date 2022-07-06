import { atom, selector } from "recoil";

export const userState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: {
    name: "Ayrton",
    apellido: "Juarez",
  },
  // default value (aka initial value)
});

export const nameState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: async ({ get }) => {
    // const user = get(userState);
    fetch(
      "aca hago el fetch a la base de datos para traerme la data del login"
    );

    return "999";
  },
});
