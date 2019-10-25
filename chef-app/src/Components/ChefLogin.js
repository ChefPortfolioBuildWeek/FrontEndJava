import React, { useState } from "react";

//axios
import axios from "axios";
import axiosWithAuth from "../Utils/axiosWithAuth.js";

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
        props.history.push("/Chefpost");
      })
      .catch(err => console.log("error in handlesSub", err.response));

    setLogin({ username: "", password: "" });
  };

  return (
    <div className="loginContainer">
      <h1>Welcome to My Chef Recipes!</h1>
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
      </form>
    </div>
  );
};

export default Login;
