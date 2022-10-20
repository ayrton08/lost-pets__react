import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MenuModal } from "../../../src/components/menu-modal/MenuModal";

describe("<MenuModal />", () => {
  test("shouldn't show up in the dom", () => {
    // const user = userEvent.setup();
    let statusModal = false;
    const changeStatus = () => {
      statusModal ? (statusModal = false) : (statusModal = true);
    };
    const children = <li>Hola</li>;

    render(
      <MenuModal
        children={children}
        isOpen={statusModal}
        closeModal={changeStatus}
      />
    );

    // const button = screen.getByRole("button");
    // expect(button).not.toBeDefined();
  });
});
