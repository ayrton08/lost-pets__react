import { useState } from "react";

export function useModal(valueInicial = false) {
  const [isOpen, setIsOpen] = useState(valueInicial);

  function openModal() {
    return setIsOpen(true);
  }
  function closeModal() {
    return setIsOpen(false);
  }

  return [isOpen, openModal, closeModal];
}
