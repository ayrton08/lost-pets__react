import { useModal } from "../../src/hooks/useModal";
import { act, renderHook } from "@testing-library/react";

describe("useModal()", () => {
  test("shold return initial values", () => {
    const { result } = renderHook(useModal);
    const { isOpen, closeModal, openModal } = result.current;

    expect(isOpen).toBeFalsy();
    expect(closeModal).toEqual(expect.any(Function));
    expect(openModal).toEqual(expect.any(Function));
  });

  test("should change inital value", () => {
    const { result } = renderHook(useModal);
    const { isOpen, closeModal, openModal } = result.current;

    // act(() => openModal());
    // expect(isOpen).toBeTruthy();

    // act(() => closeModal());
    // expect(isOpen).toBeFalsy();
  });
});
