import { useState } from "react";
import { useRecoilValue } from "recoil";
import { data } from "./atoms";

export function useDataUser() {
  return useRecoilValue(data);
}
