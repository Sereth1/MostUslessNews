import React, { useState, useEffect } from "react";
import LoginReg from "./loginRegBtn";
import "../../css/Register.css";
import { closeLogin } from "../../helpers/utilities";
import { Link, useNavigate } from "react-router-dom";

function Login({ dispatch }) {
  const [inputs, setInputs] = useState({
    userName: "",
    password: "",
  });
  const [user, setUser] = useState(null);
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();
  loginStatus === "Login successful." && closeLogin(dispatch) && (
    <Link path="loggedIn/sdffsdfsd"></Link>
  );

  useEffect(() => {
    if (user) {
      dispatch({ type: "SET_USER", payload: user });
      setTimeout(() => {
        navigate(`/loggedIn/${user}`);
      }, 2000);
      setLoginStatus("Login successful.");
    }
  }, [user, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/login");
    if (!response.ok) {
      setLoginStatus("Failed to fetch user data.");
      return;
    }

    const users = await response.json();
    const match = users.find(
      (u) =>
        u.userName === inputs.userName &&
        u.password === inputs.password &&
        u._id
    );

    if (match) {
      setUser(match.userName);
      dispatch({ type: "userId", payload: match._id });
      console.log(match.userName, match._id);
    } else {
      setLoginStatus("Login failed: Incorrect username or password.");
    }
  };

  return (
    <div className="box pixelated">
      <LoginReg dispatch={dispatch} />
      <form onSubmit={handleSubmit}>
        <label className="lab ">Username:</label>
        <input
          name="userName"
          className="inp"
          placeholder="username"
          type="text"
          required
          value={inputs.userName}
          onChange={handleChange}
        />
        <label className="lab ">Password:</label>
        <input
          name="password"
          className="inp"
          type="password"
          placeholder="password"
          required
          value={inputs.password}
          onChange={handleChange}
        />
        <button className="btnS " type="submit">
          Login
        </button>
        {loginStatus && <p className="">{loginStatus}</p>}
      </form>
    </div>
  );
}

export default Login;
