import { mount } from "@cypress/react";
import Todo from "../../src/components/todo";

describe("Todo component testing", () => {
  it("adds a todo", () => {
    mount(<Todo />);
    cy.findByRole("list");
    // screen.queryAllByRole("listitem");
    const button = cy.findByRole("button", { name: "Add" });
    const textbox = cy.findByRole("textbox", { name: "description" });
    textbox.type("first todo");
    button.click();
    // userEvent.type(textbox, "first todo");
    // userEvent.click(button);
    const items = cy.findAllByRole("listitem");
    items.should("have.length", 1);
    items.should("have.text", "first todo");
    cy.findByDisplayValue("first todo");
    // expect(items).toHaveLength(1);
    // expect(items[0].textContent).toBe("first todo");
    // screen.getByText("first todo");
  });
});
