import { atom, selector } from "recoil";

export const userState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: {
    name: "Juan",
  }, // default value (aka initial value)
});

export const nameState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const user = get(userState);

    return user.name;
  },
});
