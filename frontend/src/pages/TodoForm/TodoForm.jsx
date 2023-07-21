import React, { useState } from "react";
import axios from "axios";

function TodoForm({ data }) {
  const [value, setValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/tasks", { text: value });

      const response = await axios.get("http://localhost:5000/tasks");
      data(response.data);

      setValue("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className="TodoForm">
      <input
        className="todo-input"
        type="text"
        name="text"
        placeholder="Qu'est ce que tu as à faire aujourd'hui ?"
        onChange={handleChange}
        value={value}
      />
      <button type="submit" className="todo-button" onClick={handleSubmit}>
        Ajouter
      </button>
    </form>
  );
}

export default TodoForm;
