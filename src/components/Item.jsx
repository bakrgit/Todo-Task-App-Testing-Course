import { useState } from "react";

export const Item = ({ task, onDeleteTask, onDoneTask, onEditTask }) => {
  const [done, setDone] = useState(task.done);
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(task.name);

  const editTask = (e) => {
    e.preventDefault();
    setEdit(!edit);
    onEditTask({
      id: task.id,
      name,
      done: task.done,
    });
  };
  const doneTask = (e) => {
    e.preventDefault();
    setDone(!done);
    onDoneTask(task);
  };
  return (
    <div
      data-testid="item-task"
      className={`d-flex my-2 ${
        task.done ? "bg-item-done" : "bg-item"
      } w-75  justify-content-between rounded-2`}
    >
      <div className="d-flex text-dark">
        <h4 className="mx-3 pt-2">{task.id}</h4>

        {edit ? (
          <input
            type="text"
            className="form-control "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : task.done ? (
          <h4 className="me-3 pt-2 text-decoration-line-through">
            {task.name}
          </h4>
        ) : (
          <h4 className="me-3 pt-2 ">{task.name}</h4>
        )}
      </div>
      <div className="my-1 d-flex">
        <button
          className="btn btn-danger me-2"
          onClick={() => onDeleteTask(task)}
        >
          Delete
        </button>
        {done === false ? (
          <button className="btn btn-success me-2" onClick={doneTask}>
            Done
          </button>
        ) : (
          <button className="btn btn-info me-2" onClick={doneTask}>
            Undo
          </button>
        )}
        <button className="btn btn-secondary me-2" onClick={editTask}>
          Edit
        </button>
      </div>
    </div>
  );
};
