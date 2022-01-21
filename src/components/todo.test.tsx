import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./todo";

describe("Todo component testing", () => {
  test("adds a todo", () => {
    render(<Todo />);
    screen.getByRole("list");
    screen.queryAllByRole("listitem");
    const button = screen.getByRole("button", { name: "Add" });
    const textbox = screen.getByRole("textbox", { name: "description" });
    userEvent.type(textbox, "first todo");
    userEvent.click(button);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(1);
    expect(items[0].textContent).toBe("first todo");
    screen.getByText("first todo");
  });
});
