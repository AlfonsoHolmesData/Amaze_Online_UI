import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { appState } from '../AmazeOnlineStateSlices/app-state-slice';
import { TextField } from '@material-ui/core';
import {Auth} from 'aws-amplify';
import { authState } from '../AmazeOnlineStateSlices/auth-slice';
import { Authenticate, Register } from '../AmazeOnlineRemoteClient/Auth-service';
import ErrorAlert from './ErrorComponent';

 function RegisterComponent (props : any) {
    
    const app_state = useSelector(appState);
    const auth_slice = useSelector(authState);
    const [errorAlertStatus , SetErrorAlertStatus] = useState(false);
    const [errorDuration , SetErrorDuration] = useState(0);
    const [errorMessage , SetErrorMessage] = useState('');
    const [newUser , SetNewUser] = useState({
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: ''
    });


    let handleChange = (e: any) => {
      const { name, value } = e.target;
      SetNewUser({...newUser, [name]: value});
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

 const register = async () => {
          try{
            Register({firstname : newUser.firstname , lastname : newUser.lastname , email : newUser.email ,username : newUser.username , password : newUser.password});
          }catch(err: any)
          {
           
              SetErrorAlertStatus(true);
              SetErrorMessage('Unable to Authenticate');
            
          }
}
   
 

    return(
      <>
        <div >
        <TextField label="firstname" 
                       id="firstname" 
                       name="firstname" 
                       type="firstname"
                       placeholder="Enter your firstname" 
                       className={classes.form_setting} value={newUser.firstname} onChange={handleChange} />
            <br/>
        <TextField label="lastname" 
                       id="lastname" 
                       name="lastname" 
                       type="lastname"
                       placeholder="Enter your lastname" 
                       className={classes.form_setting} value={newUser.lastname} onChange={handleChange} />
            <br/>
        <TextField label="email" 
                       id="email" 
                       name="email" 
                       type="email"
                       placeholder="Enter your email" 
                       className={classes.form_setting} value={newUser.email} onChange={handleChange} />
            <br/>
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
                       className={classes.form_setting} value={newUser.password} onChange={handleChange} />
            <br/>
            <Button variant="contained"  href="#contained-buttons" className={classes.button_for_Home} onClick={register}> <b>Register</b>  </Button>

            <ErrorAlert isOpen={errorAlertStatus} duration={3000} message={errorMessage} SetStatusOnClose={SetErrorAlertStatus}  />
        </div> 
      </>
    );
};

export default RegisterComponent;