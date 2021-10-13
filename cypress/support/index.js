import "@applitools/eyes-cypress/commands";

import "./commands";

before(() => {
  cy.eyesOpen({
    appName: "Cypress App test",
    testName: "Should test the application",
  });
});

after(() => {
  cy.eyesClose();
});
