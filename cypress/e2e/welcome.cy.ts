/// <reference types="cypress" />

describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:8080");
  });

  context("Main menu", () => {
    it("the h1 contain the correct text", () => {
      // this is the title
      cy.getByData("welcome-title")
        .should("exist")
        .contains(/welcome/i);
    });
    it("the features on the homepage are correct", () => {
      cy.getByData("link-search")
        .should("exist")
        .contains(/search/i);
      cy.getByData("link-login").should("exist").contains(/login/i);
      cy.getByData("link-register")
        .should("exist")
        .contains(/register/i);
    });
  });

  context("Search button", () => {
    it("a user can click on button search, them go to Home page and see if are reported pets", () => {
      cy.getByData("link-search").click();
      cy.location("pathname").should("eq", "/home");
      cy.getByData("home-result").should("exist");
    });
  });
});
