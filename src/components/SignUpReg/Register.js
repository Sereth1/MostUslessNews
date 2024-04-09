"use client";
import React from "react";
import "../../css/Register.css";

import { createUser } from "../../helpers/postFunction";
import LoginRegBtn from "./loginRegBtn";
import { label } from "../..//helpers/utilities";

function Register({ dispatch, userName, password, name, email }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    let userData = {
      userName,
      password,
      name,
      email,
    };
    createUser(userData);
  };

  return (
    <div>
      <div className="box pixelated">
        <LoginRegBtn dispatch={dispatch} />
        <form onSubmit={handleSubmit}>
          {label[0].labels.map((item, i) => (
            <React.Fragment key={item}>
              <label className="lab">{item}</label>
              <input
                type={i === 1 ? "password" : i === 3 ? "email" : "text"}
                required
                className="inp"
                key={i}
                placeholder={item}
                onChange={(e, i) =>
                  dispatch({
                    type: item,
                    payload: e.target.value,
                  })
                }
              ></input>
            </React.Fragment>
          ))}
          <button className="btnS">register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
