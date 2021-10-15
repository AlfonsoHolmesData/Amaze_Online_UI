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

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <BackGroundDisply />
     <Router>

       <Route exact path = "/">
         <HomePage />
       </Route>

       <Route  path = "/creategame">
         <CreateGameComponent />
       </Route>

       <Route  path = "/game">
         <GameComponent />
       </Route>
       
     </Router>
    </div>
  );
}

export default App;
