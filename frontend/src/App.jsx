import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./index.scss";
import "./App.css";
import TodoWrapper from "./pages/TodoWrapper/TodoWrapper";
import Login from "./pages/Login/Login";
import Protected from "./pages/Protected/Protected";
import PathError from "./pages/Protected/PathError";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<PathError />} />
          <Route
            path="/tasks"
            element={
              <Protected>
                <TodoWrapper />
              </Protected>
            }
          />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
