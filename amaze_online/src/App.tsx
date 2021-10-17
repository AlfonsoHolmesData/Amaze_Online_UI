import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './AmazeOnlineComponents/AmazeHomePageComponent';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import BackGroundDisply from './AmazeOnlineComponents/AmazeBackGroundDisplay';
import GameComponent from './AmazeOnlineComponents/AmazeOnlineGameComponent';
import CreateGameComponent from './AmazeOnlineComponents/AmazeOnlineCreateGameComponent';
import LoginComponent from './AmazeOnlineComponents/AmazeOnineAuthComponent';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
    
      <Router>
        <BackGroundDisply />
          <Switch>

              <Route path = "/login">
                <LoginComponent />
              </Route>

              <Route exact path = "/">
                <HomePage />
              </Route>

              <Route  path = "/creategame">
                <CreateGameComponent />
              </Route>

              <Route  path = "/game">
                <GameComponent />
              </Route>

          </Switch>
      </Router>
    </div>
  );
}

export default App;
