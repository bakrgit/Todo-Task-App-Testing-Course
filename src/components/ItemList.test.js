import { render, screen } from "@testing-library/react";
import { ItemList } from "./ItemList";

//1-checck if the component renders number of tasks
test("renders number of tasks", () => {
  const tasks = [
    { id: 1, name: "Task 1", done: false },
    { id: 2, name: "Task 2", done: false },
  ];
  render(<ItemList tasks={tasks} />);
  const taskElements = screen.getAllByTestId("task");
  expect(taskElements).toHaveLength(2);
});
//2-check if component renders no tasks when tasks is empty
test("renders no tasks", () => {
  const tasks = [];
  render(<ItemList tasks={tasks} />);
  const taskElements = screen.queryAllByTestId("task");
  expect(taskElements).toHaveLength(0);
});
