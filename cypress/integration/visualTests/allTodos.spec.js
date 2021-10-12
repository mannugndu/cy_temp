/// <reference types="cypress" />
import AllTodoPage from "../../pages/allTodoPage";

describe("ToDo HomePage Tests - All Todos", () => {
  const allTodoPage = new AllTodoPage();
  const todos = ["Pay electric bill", "Walk the dog"];

  it("Should display 2 todos by default", () => {
    cy.eyesOpen({
      appName: "Todo App",
      testName: "Default todos",
    });

    allTodoPage.visit();
    cy.eyesCheckWindow("Home Page");
    cy.eyesClose();
  });

  it("Should be able to add todo", () => {
    const newTodo = "Feed the cat";

    cy.eyesOpen({
      appName: "Todo App",
      testName: "Add todos",
    });
    allTodoPage.visit().addNewTodo(newTodo);
    cy.eyesCheckWindow("Check added todos");
    cy.eyesClose();
  });

  it("Should be able to mark the todo items as completed", () => {
    const targetTodo = todos[0];
    cy.eyesOpen({
      appName: "Todo App",
      testName: "Complete todos",
    });
    allTodoPage.visit().markTodoAsCompleted(targetTodo);
    cy.eyesCheckWindow("Check completed todos");
    cy.eyesClose();
  });
});
