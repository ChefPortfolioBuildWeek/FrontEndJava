import React, { useState } from "react";
import styled from "styled-components";
import { Route, Link, Switch } from "react-router-dom";
import chefPosting from "./ChefPostPage";

//axios
import axios from "axios";
import axiosWithAuth from "../Utils/axiosWithAuth.js";

const button = styled.button`
  margin: 1% 0% 1% 0%;
  padding: 1%;
  width: 10%;
  font-weight: bold;
  background-color: #9ffcdf;
  color: #47624f;
  border: 2px solid #47624f;
  border-radius: 5%;
`;

const Login = props => {
  const [login, setLogin] = useState({ username: "", password: "" });

  const changeHandler = event => {
    event.preventDefault();
    setLogin({
      ...login,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    axiosWithAuth()
      .post("https://lambda-chef-portfolio.herokuapp.com/api/auth/login", login)
      .then(response => {
        console.log(response);
        localStorage.setItem("token", response.data.payload);
        props.history.push("/chefpostpage");
      })
      .catch(err => console.log("error in handlesSub", err.response));

    setLogin({ username: "", password: "" });
  };

  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit}>
        <input
          className="name"
          placeholder="enter username"
          type="text"
          value={login.username}
          name="username"
          onChange={changeHandler}
        />
        <input
          className="password"
          placeholder="enter password"
          type="password"
          value={login.password}
          name="password"
          onChange={changeHandler}
        />
        <button type="submit" className="SubmitButton">
          Connect!
        </button>
        <Route>
          <Link to="/chefposts">Continue as Guest</Link>
          <Switch>
            <Route exact path="/Chefposts" component={chefPosting} />
          </Switch>
        </Route>
      </form>
    </div>
  );
};

export default Login;
