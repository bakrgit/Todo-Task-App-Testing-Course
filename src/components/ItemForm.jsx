import { useState } from "react";

export const ItemForm = ({ onAddTask }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const addTask = (e) => {
    e.preventDefault();
    if (name === "") setError(true);
    else setError(false);
    onAddTask({ name, done: false });
    setName("");
  };
  return (
    <div className="d-flex flex-column align-content-center ">
      <h1 className="text-center" data-testid="app-title">
        Todo Tasks App
      </h1>
      <form className="d-flex my-2 bg-primary w-75  mx-auto justify-content-between rounded-2">
        <input
          data-testid="task-name"
          type="text"
          className={`form-control  ${error ? "border-danger border-4" : ""}`}
          placeholder="Add Task"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          data-testid="task-add-btn"
          className={`btn bg-primary text-white fw-bold fs-4`}
          onClick={addTask}
        >
          Add
        </button>
      </form>
      {error && (
        <div data-testid="error-message" className="text-danger mx-auto ">
          Please enter a task name
        </div>
      )}
    </div>
  );
};
