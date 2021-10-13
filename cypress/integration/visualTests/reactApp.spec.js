/// <reference types="cypress" />

describe("Testing the react app", () => {

  it("Should display 2 todos by default", () => {
    cy.eyesOpen({
      appName: "React App",
      testName: "HomePage",
    });
    cy.visit('http://localhost:3000/');
    cy.eyesCheckWindow("Home Page");
  });
});

afterEach(() => {
  cy.eyesClose();
});
