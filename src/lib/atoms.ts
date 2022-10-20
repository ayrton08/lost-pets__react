import { atom } from "recoil";

export const locationReport = atom({
  key: "location",
  default: {},
});

export const state = atom({
  key: "loginState",
  default: false,
});

export const dropzone = atom({
  key: "image",
  default: [],
});

export const idPet = atom({
  key: "id",
  default: {},
});
