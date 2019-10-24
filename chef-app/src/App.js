import React, { useState, useContext } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import chefOnboarding from "./Components/ChefLogin";
import chefPosting from "./Components/ChefPostPage";
import styled from "styled-components";
import NavBar from "./Components/NavBar";
import signUpPage from "./Components/Register";
import GuestHome from "./Components/GuestHome";
import PrivateRoute from "./Components/PrivateRoute";
import GuestHomeContext from "./context/GuestHomeContext";
import ChefCardContext from "./context/ChefCardContext";
const Header = styled.div`
  display: flex;
  justify-content: center;
`;
const NavLinks = styled.p`
  margin: 2%;
  width: 15%;
`;
const Links = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  color: #52ad9c;
  font-weight: bold;
  padding: 4%;
  border: 4px solid #52ad9c;
  &:hover {
    background-color: #47624f;
    color: #edf9f3;
  }
`;

function App() {
  const [post, setPost] = useState([]);
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState([]);
  const [create, setcreate] = useState([]);
  const [update, setupdate] = useState([]);

  return (
    <div className="App">
      <GuestHomeContext.Provider value={{ create, update }}>
        <GuestHomeContext.Provider value={(post, users, username)}>
          <NavBar />
          <Route>
            <div>
              <h1>Welcome to the Chef Portfolio!</h1>
            </div>
            <Switch>
              <PrivateRoute exact path="/" component={chefOnboarding} />
              <PrivateRoute exact path="/chefposts" component={chefPosting} />
              <PrivateRoute exact path="/register" component={signUpPage} />
              <PrivateRoute exact path="/guesthome" component={GuestHome} />
            </Switch>
          </Route>
        </GuestHomeContext.Provider>
      </GuestHomeContext.Provider>
    </div>
  );
}
export default App;
