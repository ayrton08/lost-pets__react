/// <reference types="cypress" />

describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:8080");
  });

  context("Main menu", () => {
    it("the h1 contain the correct text", () => {
      // this is the title
      cy.get(".AC0KLhL3uGoL6aF7x46A")
        .should("exist")
        .contains(/welcome/i);
    });
    it("the features on the homepage are correct", () => {
      cy.get("dt")
        .eq(0)
        .contains(/4 courses/i);
      cy.get("dt")
        .eq(1)
        .contains(/25\+ Lessons/i);
      cy.get("dt")
        .eq(2)
        .contains(/Free and Open Source/i);
    });
  });
});
