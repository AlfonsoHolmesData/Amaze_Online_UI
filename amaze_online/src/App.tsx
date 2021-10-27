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
import GameComponent from './AmazeOnlineComponents/AmazeOnlineGameComponents/AmazeOnlineGameComponent';
import CreateGameComponent from './AmazeOnlineComponents/AmazeOnlineGameComponents/AmazeOnlineCreateGameComponent';
import { COGNITO } from './config/aws';
import AuthComponent from './AmazeOnlineComponents/AmazeOnineAuthComponent';
import awsmobile from './aws-exports';

Amplify.configure({
  aws_cognito_region: COGNITO.REGION,
  aws_user_pools_id: COGNITO.USER_POOL_ID,
  aws_user_pools_web_client_id: COGNITO.APP_CLIENT_ID,
  aws_project_region: awsmobile.aws_project_region,
  aws_appsync_graphqlEndpoint: awsmobile.aws_appsync_graphqlEndpoint,
  aws_appsync_region: awsmobile.aws_appsync_region,
  aws_appsync_authenticationType: awsmobile.aws_appsync_authenticationType,
  aws_appsync_apiKey: awsmobile.aws_appsync_apiKey
});

function App() {
  return (
    <div className="App">
    
      <Router>
        <BackGroundDisply />
          <Switch>

              <Route path = "/login">
                <AuthComponent />
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
