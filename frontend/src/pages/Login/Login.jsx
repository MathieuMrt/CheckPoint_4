import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GrMail } from "react-icons/gr";
import { AiFillLock } from "react-icons/ai";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [connectionError, setConnectionError] = useState(false);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:5000/user`, { email, password })
      .then((res) => {
        console.warn("Success", res);
        localStorage.setItem("user", { email, password });
        navigate("/tasks");
      })
      .catch((err) => {
        console.error(err);
        setConnectionError(true);
      });
  };

  return (
    <div className="login">
      <section>
        <div className="form-box">
          <div className="form-value">
            <form action="" onSubmit={handleClick}>
              <h2>Login</h2>
              {connectionError && (
                <p>Échec de connexion. Veuillez réessayer.</p>
              )}
              <div className="inputbox">
                <GrMail />
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="inputbox">
                <AiFillLock />
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="password">Mot de passe</label>
              </div>
              <button type="submit">Connexion</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
