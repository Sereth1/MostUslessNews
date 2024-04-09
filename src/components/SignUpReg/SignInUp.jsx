"use client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UserHomePage from "../CreateArticle/UserHomePage";
import Intro from "../HomePage/Intro";
import Login from "./Login";
import Register from "./Register";

function SignInUp({ userName, password, name, email, status, user, dispatch }) {
  console.log(`reducer:${user}${status}`);
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Intro />}></Route>
            <Route path="/login" element={<Login dispatch={dispatch} />} />
            <Route
              path="/register"
              element={
                <Register
                  dispatch={dispatch}
                  userName={userName}
                  password={password}
                  name={name}
                  email={email}
                />
              }
            />
            <Route
              path={`loggedIn/:user`}
              element={<UserHomePage user={user} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default SignInUp;
