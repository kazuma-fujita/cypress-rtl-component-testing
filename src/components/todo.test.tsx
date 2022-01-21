import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./todo";

describe("Todo component testing", () => {
  beforeEach(() => {
    render(<Todo />);
    screen.getByRole("list");
    screen.queryAllByRole("listitem");
  });

  const addTodoItem = (description: string) => {
    const textbox = screen.getByRole("textbox", { name: "description" });
    userEvent.type(textbox, description);
    screen.getByDisplayValue(description);
    userEvent.click(screen.getByRole("button", { name: "Add" }));
    screen.getByDisplayValue("");
  };

  const verifyToAddTodoItems = (descriptions: string[]) => {
    descriptions.forEach((description: string) => {
      addTodoItem(description);
    });
    expect(screen.getAllByRole("listitem")).toHaveLength(descriptions.length);
    descriptions.forEach((description: string) => {
      screen.getByRole("listitem", { name: description });
    });
  };

  test("adds a first todo", () => {
    verifyToAddTodoItems(["first todo"]);
  });

  test("adds two todo items", () => {
    verifyToAddTodoItems(["first todo", "second todo"]);
  });

  test("adds three todo items", () => {
    verifyToAddTodoItems(["first todo", "second todo", "third todo"]);
  });
});
