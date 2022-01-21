describe("Todo page testing", () => {
  before(() => {
    cy.visit("/todo");
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

  it("adds a second todo", () => {
    AddTodo("second todo");
    cy.findAllByRole("listitem").should("have.length", 2);
    cy.findByRole("listitem", { name: "second todo" });
  });
});
