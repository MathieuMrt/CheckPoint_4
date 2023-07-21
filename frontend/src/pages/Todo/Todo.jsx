import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";

function Todo({ task, id, handleTodoDelete, handleTodoUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);
  const [isClicked, setIsClicked] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    handleTodoDelete(id);
  };

  const handleUpdate = () => {
    if (isEditing) {
      axios
        .put(`http://localhost:5000/tasks/${id}`, { text: updatedTask })
        .then((res) => {
          console.warn(res.data);
          setIsEditing(false);
          handleTodoUpdate(id, updatedTask);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setIsEditing(true);
    }
  };

  const handleChange = (e) => {
    setUpdatedTask(e.target.value);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="Todo">
      {isEditing ? (
        <input
          className="edit-input"
          type="text"
          value={updatedTask}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleUpdate();
            }
          }}
          onBlur={handleUpdate}
        />
      ) : (
        <p onClick={handleClick} className={isClicked ? "completed" : "p"}>
          {task}
        </p>
      )}
      <div className="icons">
        <BiEdit className="edit-icons" onClick={handleUpdate} />
        <FaTrashAlt className="delete-icons" onClick={handleDelete} />
      </div>
    </div>
  );
}

export default Todo;
