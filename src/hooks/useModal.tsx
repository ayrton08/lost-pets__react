import { useState } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    return setIsOpen(true);
  }
  function closeModal() {
    return setIsOpen(false);
  }

  return [isOpen, openModal, closeModal];
}
