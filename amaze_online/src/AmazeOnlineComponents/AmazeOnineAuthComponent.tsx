import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { appState } from '../AmazeOnlineStateSlices/app-state-slice';
import { TextField } from '@material-ui/core';
import {Auth} from 'aws-amplify';
import { authState } from '../AmazeOnlineStateSlices/auth-slice';
import { Authenticate } from '../AmazeOnlineRemoteClient/Auth-service';
import ErrorAlert from './ErrorComponent';
import LoginComponent from './AmazeOnineLoginComponent';
import RegisterComponent from './AmazeOnineRegisterComponent';

 function AuthComponent (props : any) {
    
    const app_state = useSelector(appState);
    const auth_slice = useSelector(authState);
    const [errorAlertStatus , SetErrorAlertStatus] = useState(false);
    const [errorDuration , SetErrorDuration] = useState(0);
    const [errorMessage , SetErrorMessage] = useState('');
    const [creds , SetCreds] = useState({
      username: '',
      password: ''
    });


    let handleChange = (e: any) => {
      const { name, value } = e.target;
      SetCreds({...creds, [name]: value});
  }
    const useStyles = makeStyles((theme) => ({
      root: {
        textAlign : 'center',
        color:'#DBDFE7',
        fontFamily: 'Poiret One',
        fontSize:'3em',
     
      },
      form_setting: {
        alignContent : 'center',
        width:'30%',
        textAlign : 'center',
        margin:'2em'
      },  
      welcome_page: {
        alignContent : 'center',
        textAlign : 'center'
      },  
      button_for_Home: {
        background:'orange',
        textAlign : 'center',
        boxShadow: 'black 10px 10px 40px',
        color:'white',
        margin: '.1em'
      },
         display_span : {
           //dynamically changes with screen
          color: `${app_state.app_title_color}`
        },
         display_span1 : {
          color:'blue'
        }
    }));
    
    const classes = useStyles();

   
 

    return(
      <>
        <div >
        <RegisterComponent /> 
        </div> 
      </>
    );
};

export default AuthComponent;