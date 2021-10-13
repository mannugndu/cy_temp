/// <reference types="cypress" />
import AllTodoPage from "../../pages/allTodoPage";

describe("ToDo HomePage Tests - All Todos", () => {
  const allTodoPage = new AllTodoPage();
  const todos = ["Pay electric bill", "Walk the dog"];

  it("Should display 2 todos by default", () => {
    cy.eyesOpen({
      appName: "Todo App",
      testName: "Should display 2 todos by default",
    });

    allTodoPage.visit();
    cy.eyesCheckWindow("Home Page of todo app");
  });

  it("Should be able to add todo", () => {
    const newTodo = "Feed the cat";

    cy.eyesOpen({
      appName: "Todo App",
      testName: "Should be able to add todo",
    });
    allTodoPage.visit().addNewTodo(newTodo);
    cy.eyesCheckWindow("Checking new added todos");
  });

  it("Should be able to mark the todo items as completed", () => {
    const targetTodo = todos[0];
    cy.eyesOpen({
      appName: "Todo App",
      testName: "Should be able to mark the todo items as completed",
    });
    allTodoPage.visit();
    cy.eyesCheckWindow("Check completed todos marked");
  });
});

afterEach(() => {
  cy.eyesClose();
});
