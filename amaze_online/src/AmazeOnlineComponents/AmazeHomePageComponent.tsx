import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { authState } from '../AmazeOnlineStateSlices/auth-slice';
import { useDispatch, useSelector } from 'react-redux';
import { appState, changeToPReGameDisplay } from '../AmazeOnlineStateSlices/app-state-slice';

 function HomePage (props : any) {
    
    const history = useHistory();
    const auth = useSelector(authState);
    const app_state = useSelector(appState);
    const dispatch = useDispatch();
    const switch_to_game = () => {
      dispatch(changeToPReGameDisplay);
        history.push('/creategame');
    }

    const useStyles = makeStyles((theme) => ({
      root: {
        background: 'white',
        alignContent : 'center',
        textAlign : 'center',
        zIndex: 0, 
        marginTop:'10%'
      },
      welcome_page: {
        alignContent : 'center',
        textAlign : 'center',
        marginTop:'50%'
      },  
      button_for_Home: {
        background: '#DBDFE7',
       
        color:'white',
        margin: '.5em'
      },
      display_span : {
       color:'orange'
     },
      display_span1 : {
       color:'blue'
     }
    }));
    
    const classes = useStyles();

    return(
      <>
      { 
        <div className={classes.root}>
          <img src='maze-clipart-clip-art-15.png' width='300' />
        </div>
        
        }

      </>
    );
};

export default HomePage;