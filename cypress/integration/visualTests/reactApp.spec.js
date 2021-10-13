/// <reference types="cypress" />

describe("Testing the react app", () => {

  it("Should display 2 todos by default", () => {
    cy.eyesOpen({
      appName: "React app",
      testName: "Should display 2 todos by default",
    });
    cy.visit('http://localhost:3000/');
    cy.eyesCheckWindow("Default Page of React");
    cy.get('div:nth-child(2) > div.panel-body > button').click();
    cy.eyesCheckWindow("button 2 info")
  });
});

afterEach(() => {
  cy.eyesClose();
});
