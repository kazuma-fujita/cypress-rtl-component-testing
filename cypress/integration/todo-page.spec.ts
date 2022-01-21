describe("Todo page testing", () => {
  beforeEach(() => {
    cy.visit("/todo");
    cy.findByRole("list");
  });

  const addTodoItem = (description: string) => {
    const textbox = cy.findByRole("textbox", { name: "description" });
    textbox.type(description);
    textbox.should("have.value", description);
    cy.findByRole("button", { name: "Add" }).click();
    textbox.should("have.value", "");
  };

  const verifyToAddTodoItems = (descriptions: string[]) => {
    descriptions.forEach((description: string) => {
      addTodoItem(description);
    });
    cy.findAllByRole("listitem").should("have.length", descriptions.length);
    descriptions.forEach((description: string) => {
      cy.findByRole("listitem", { name: description });
    });
  };

  it("adds a first todo", () => {
    verifyToAddTodoItems(["first todo"]);
  });

  it("adds two todo items", () => {
    verifyToAddTodoItems(["first todo", "second todo"]);
  });

  it("adds three todo items", () => {
    verifyToAddTodoItems(["first todo", "second todo", "third todo"]);
  });
});
