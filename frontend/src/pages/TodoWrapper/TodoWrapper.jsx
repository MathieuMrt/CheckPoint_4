import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";

function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  const [data, setData] = useState();
  const [deleteTodo, setDeleteTodo] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/tasks`)
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [data]);

  const handleTodoDelete = (id) => {
    axios
      .delete(`http://localhost:5000/tasks/${id}`)
      .then((res) => {
        console.warn(res.data);
        setDeleteTodo(id);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (deleteTodo) {
      setTodos(todos.filter((todo) => todo.id !== deleteTodo));
      setDeleteTodo(null);
    }
  }, [deleteTodo, todos]);

  const handleTodoUpdate = (id, updatedTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: updatedTask } : todo
      )
    );
  };

  const navigate = useNavigate();

  const handleDisconnect = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="TodoWrapper">
      <button type="button" className="button-deco" onClick={handleDisconnect}>
        Déconnexion
      </button>
      <h2>ToDoList</h2>
      <TodoForm data={setData} />
      {todos &&
        todos.map((el) => (
          <Todo
            task={el.text}
            key={el.id}
            id={el.id}
            handleTodoDelete={handleTodoDelete}
            handleTodoUpdate={handleTodoUpdate}
          />
        ))}
    </div>
  );
}

export default TodoWrapper;
