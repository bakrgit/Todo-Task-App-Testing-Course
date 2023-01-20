import { render, screen } from "@testing-library/react";
import { ItemForm } from "./ItemForm";
import userEvent from "@testing-library/user-event";

//1-check if the form is rendered correctly
test("renders ItemForm", () => {
  render(<ItemForm />);
  const inputElement = screen.getByTestId("task-name");
  const btnElement = screen.getByTestId("task-add-btn");
  const titleElement = screen.getByTestId("app-title");
  expect(titleElement).toBeInTheDocument();
  expect(btnElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
});
//2-check input typing
test("renders input text typing", async () => {
  const mock = jest.fn();
  render(<ItemForm onAddTask={mock} />);
  const btnElement = screen.getByTestId("task-add-btn");
  const inputElement = screen.getByTestId("task-name");
  await userEvent.type(inputElement, "Task 1");
  expect(inputElement).toHaveValue("Task 1");
});
//3-check if error message is displayed when input is empty when clicking on the button
test("renders error message when input is empty", async () => {
  const mock = jest.fn();
  render(<ItemForm onAddTask={mock} />);
  const btnElement = screen.getByTestId("task-add-btn");
  await userEvent.click(btnElement);
  const errorMessage = await screen.getByTestId("error-message");
  expect(errorMessage).toBeInTheDocument();
});
//4-check when input is not empty and button is clicked if the function is called
test("renders function is called when input is not empty", async () => {
  const mock = jest.fn();
  render(<ItemForm onAddTask={mock} />);
  const btnElement = screen.getByTestId("task-add-btn");
  const inputElement = screen.getByTestId("task-name");
  await userEvent.type(inputElement, "Task 1");
  await userEvent.click(btnElement);
  expect(mock).toHaveBeenCalled();
});
//5-check if the input is cleared after clicking on the button
test("renders input is cleared after clicking on the button", async () => {
  const mock = jest.fn();
  render(<ItemForm onAddTask={mock} />);
  const btnElement = screen.getByTestId("task-add-btn");
  const inputElement = screen.getByTestId("task-name");
  await userEvent.type(inputElement, "Task 1");
  await userEvent.click(btnElement);
  expect(inputElement).toHaveValue("");
});
