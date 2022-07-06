import { useState } from "react";

type UseModal = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export function useModal(valueInicial = false): UseModal {
  const [isOpen, setIsOpen] = useState<boolean>(valueInicial);

  function openModal() {
    return setIsOpen(true);
  }
  function closeModal() {
    return setIsOpen(false);
  }

  return { isOpen, openModal, closeModal };
}
