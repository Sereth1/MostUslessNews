"use client";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "../components/HomePage/Intro";
import Login from "../components/SignUpReg/Login";
import Register from "../components/SignUpReg/Register";
import Header from "../components/SignUpReg/Header";
import UserHomePage from "../components/CreateArticle/UserHomePage";
import { useFormState } from "../helpers/reducerReg";
import NavBar from "../components/SignUpReg/NavBar";
import Main from "../components/Main/Main";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [{ userName, password, name, email, status, user, userId }, dispatch] =
    useFormState();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div></div>;
  }

  return (
    <main>
      <Router>
        <Routes>
          <Route />
          <Route path="/" element={<Intro />} />
          <Route
            path="/login"
            element={
              <>
                <Header text={"HELLO MI FRIENT"} />
                <Login dispatch={dispatch} />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Header text={"WHY THOUGH"} />
                <Register
                  dispatch={dispatch}
                  userName={userName}
                  password={password}
                  name={name}
                  email={email}
                />
              </>
            }
          />
          <Route
            path="/loggedIn/:user"
            element={<UserHomePage userId={userId} user={user} />}
          />
          <Route
            path="/Home"
            element={
              <>
                {" "}
                <NavBar user={user} userId={userId} />
                <Main user={user} userId={userId} />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
}
