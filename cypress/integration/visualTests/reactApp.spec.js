/// <reference types="cypress" />

describe("Testing the react app", () => {

  it("Should display 2 todos by default", () => {
    cy.eyesOpen({
      appName: "React App",
      testName: "Default todos",
    });
    cy.visit('http://localhost:3000/');
    cy.eyesCheckWindow("Home Page");
    cy.get('div:nth-child(2) > div.panel-body > button').click();
    cy.eyesCheckWindow("button 2 info")
  });
});

afterEach(() => {
  cy.eyesClose();
});
