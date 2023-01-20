import { render, screen } from "@testing-library/react";
import { Item } from "./Item";

//1- Test if the component renders one item
test("renders one item", () => {
  const item = { id: 1, name: "Task 1", done: false };
  const mockOnDoneTask = jest.fn();
  const mockOnDeleteTask = jest.fn();
  const mockOnEditTask = jest.fn();
  render(
    <Item
      task={item}
      onDeleteTask={mockOnDeleteTask}
      onDoneTask={mockOnDoneTask}
      onEditTask={mockOnEditTask}
    />
  );
  const itemElement = screen.getByTestId("item-task");
  expect(itemElement).toBeInTheDocument();
});
