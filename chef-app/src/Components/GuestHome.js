import React from "react";
import axiosWithAuth from "../Utils/axiosWithAuth";
import axios from "axios";
// import styled from 'styled-components';
// import {Route, Link, Switch} from 'react-router-dom';

function GuestHome(handleSubmit) {
   handleSubmit = () => {
    axiosWithAuth()
      .get("https://lambda-chef-portfolio.herokuapp.com/api/posts")
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err.response));
  };
  handleSubmit = () => {
    axiosWithAuth()
      .get("https://lambda-chef-portfolio.herokuapp.com/api/users")
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err.response));
  };
  handleSubmit = () => {
    axiosWithAuth()
      .get("https://lambda-chef-portfolio.herokuapp.com/api/posts/:username")
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div>
      <p>
        This is the guest home page.
        <br /> This page will display the posts that chefs make.
      </p>
    </div>
  );
}
export default GuestHome;
