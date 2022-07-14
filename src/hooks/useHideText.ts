import { useState } from "react";

type UseHiden = {
  isOpen: boolean;
  show: () => void;
  hide: () => void;
};

export function useHiden(valueInicial = false): UseHiden {
  const [isOpen, setIsOpen] = useState<boolean>(valueInicial);

  function show() {
    return setIsOpen(true);
  }
  function hide() {
    return setIsOpen(false);
  }

  return { isOpen, show, hide };
}
