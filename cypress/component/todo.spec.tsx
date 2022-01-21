import { mount } from "@cypress/react";
import Todo from "../../src/components/todo";

describe("Todo component testing", () => {
  beforeEach(() => {
    mount(<Todo />);
    cy.findByRole("list");
  });

  const AddTodo = (description: string) => {
    const textbox = cy.findByRole("textbox", { name: "description" });
    textbox.type(description);
    textbox.should("have.value", description);
    cy.findByRole("button", { name: "Add" }).click();
    textbox.should("have.value", "");
  };

  it("adds a first todo", () => {
    AddTodo("first todo");
    cy.findAllByRole("listitem").should("have.length", 1);
    cy.findByRole("listitem", { name: "first todo" });
  });

  it("adds two todo items", () => {
    AddTodo("first todo");
    AddTodo("second todo");
    cy.findAllByRole("listitem").should("have.length", 2);
    cy.findByRole("listitem", { name: "first todo" });
    cy.findByRole("listitem", { name: "second todo" });
  });

  it("adds three todo items", () => {
    AddTodo("first todo");
    AddTodo("second todo");
    AddTodo("third todo");
    cy.findAllByRole("listitem").should("have.length", 3);
    cy.findByRole("listitem", { name: "first todo" });
    cy.findByRole("listitem", { name: "second todo" });
    cy.findByRole("listitem", { name: "third todo" });
  });
});
