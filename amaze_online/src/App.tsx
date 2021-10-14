import logo from './logo.svg';
import './App.css';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './AmazeOnlineComponents/AmazeHomePageComponent';
import React from 'react';
import BackGroundDisply from './AmazeOnlineComponents/AmazeBackGroundDisplay';
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <BackGroundDisply />
     <Router>
       <Route exact path = "/">
         <HomePage/>
       </Route>
     </Router>
    </div>
  );
}

export default App;
