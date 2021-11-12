import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { appState } from '../AmazeOnlineStateSlices/app-state-slice';
import { TextField } from '@material-ui/core';
import {Auth} from 'aws-amplify';
import { authState, login } from '../AmazeOnlineStateSlices/auth-slice';
import { Authenticate, AuthenticateDynamoDB } from '../AmazeOnlineRemoteClient/Auth-service';
import ErrorAlert from './ErrorComponent';
import { User } from '../AmazeOnlineModels/user';
import { useHistory } from 'react-router-dom';

 function LoginComponent (props : any) {
  const history = useHistory();
    const app_state = useSelector(appState);
    const auth_slice = useSelector(authState);
    const [loading , setLoading] = useState(false);
    const [errorAlertStatus , SetErrorAlertStatus] = useState(false);
    const [errorDuration , SetErrorDuration] = useState(0);
    const [errorMessage , SetErrorMessage] = useState('');
    const [creds , SetCreds] = useState({
      username: '',
      password: ''
    });
 let fakeAccount = {
username : "Fonsolo",
password : "password33"
 };
    const dispatch = useDispatch();
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
      labels: {
        textAlign : 'center',
        color:'#DBDFE7',
        fontFamily: 'Poiret One',
        fontSize : "3em"
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

 const Login = async () => {
          try{  
            
            setLoading(true);
            
           let user : User = await AuthenticateDynamoDB({ username: creds.username , password : creds.password  });
           dispatch(login(user));
           console.log(user);
           setLoading(false);
           history.push('/creategame');
          }catch(err: any)
          {
              
              SetErrorAlertStatus(true);
              SetErrorMessage('Failed');
            
          }
}
   
 

    return(
      <>
       <h1 className={classes.labels} > <span className={classes.display_span} ></span >L O G I N  </h1> 
        <div >
        <TextField  
                  label="username" 
                  id="username" 
                  name="username" 
                  type="username"
                  placeholder="Enter your username" 
                  className={classes.form_setting} onChange={handleChange} />
            <br/>
            <TextField label="password" 
                       id="password" 
                       name="password" 
                       type="password"
                       placeholder="Enter your password" 
                       className={classes.form_setting} value={creds.password} onChange={handleChange} />
            <br/>
            {loading ? <img src='loading.gif' width='40'/> : <Button variant="contained"  href="#contained-buttons" className={classes.button_for_Home} onClick={Login}> <b>L o g i n</b>  </Button>}

            <ErrorAlert isOpen={errorAlertStatus} duration={6000} message={errorMessage} SetStatusOnClose={SetErrorAlertStatus}  />
        </div> 
      </>
    );
};

export default LoginComponent;