import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import SignUpPage from "./Register";
import ChefPostPage from "./ChefPostPage";
import SigninPage from "./ChefLogin";
import "../index.css";

const NavDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
`;
const NavLinks = styled.p`
  text-decoration: none;
  color: black;

 display: flex;
 justify-content: space-around;
 margin: 0;
 display: flex;
 justify-content: space-around;
 margin: 0 auto;
 background-color: #52ad9c;
 padding-bottom: 1%;
 border-bottom: 4px solid #47624f;
`;
const NavLinks = styled(Link)`
 color: black;
 border: 2px solid black;
 text-decoration: none;
 padding: 0% 2% 0% 2%;
 margin-top: 1%;
 font-weight: bold;
 border-radius: 5px;
 background-color: #9ffcdf;
 &:hover {
   background-color: white;
 }

`;
const Navo = styled.div`
  background: #9ffcdf;
  borderl: 2px solid black;
`;

function Nav() {

  return (
    <Navo>
      <NavDiv>
        <Link to="/register">
          <NavLinks>Sign-Up</NavLinks>
        </Link>
        <Link to="/">
          <NavLinks>Login</NavLinks>
        </Link>
        <Link to="/Chefposts">
          <NavLinks>Chef Post</NavLinks>
        </Link>
        <Link>
          <NavLinks>Homepage</NavLinks>
        </Link>
        <Route exact path="/cheflogin" component={SigninPage} />
        <Route exact path="/chefpostpage" component={ChefPostPage} />
        <Link to="/">
          <NavLinks>Log out</NavLinks>
        </Link>
      </NavDiv>
    </Navo>
  );
}
export default Nav;
