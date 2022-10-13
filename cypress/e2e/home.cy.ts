/// <reference types="cypress" />

describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:8080");
  });

  context("hero section", () => {
    it("the h1 contain the correct text", () => {
      cy.getByData("hero-heading")
        .should("exist")
        .contains(/testing next.js applications with cypress/i);
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

  context("Courses section", () => {
    it("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find("a").eq(3).click();
      cy.location("pathname").should("eq", "/testing-your-first-application");
    });

    it("Course: Testing Foundations", () => {
      cy.getByData("course-1").find("a").eq(3).click();
      cy.location("pathname").should("eq", "/testing-foundations");
    });

    it("Course: Cypress Fundamentals", () => {
      cy.getByData("course-2").find("a").eq(3).click();
      cy.location("pathname").should("eq", "/cypress-fundamentals");
    });
  });
});
