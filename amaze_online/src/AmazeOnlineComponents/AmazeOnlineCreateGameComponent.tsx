import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Modal } from '@material-ui/core';
import AmazeOnlineGameSettingsModal from './AmazeOnlineGameSettingsModal';
import { useDispatch, useSelector } from 'react-redux';
import { appState, changeToGameDisplay } from '../AmazeOnlineStateSlices/app-state-slice';

 function CreateGameComponent (props : any) {
  const history = useHistory();
  const [Modal_IsOpen , SetModal_IsOpen] = useState(false);
  const [gameName , setGameName] = useState('');
  const [matchTime , setMatchTime] = useState(60);
  const app_state = useSelector(appState);
  const dispatch = useDispatch();
    const useStyles = makeStyles((theme) => ({
      root: {
        background: 'blue',
        alignContent : 'center',
        textAlign : 'center',
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
       color:'blue'
     },
      display_span1 : {
       color:'blue'
     }
    }));
    const classes = useStyles();

    const toggelModal = () => {
     SetModal_IsOpen(!Modal_IsOpen);
  }
    const switch_to_game = () => {
      dispatch(changeToGameDisplay);
      history.push('/game');
  }

    return(
      <>
        <div className={classes.root}>
            <Button variant="contained"  href="#contained-buttons" className={classes.button_for_Home} onClick={switch_to_game}  > <b>Play</b>  </Button>
            <br/>
            <Button variant="contained"  href="#contained-buttons" className={classes.button_for_Home} onClick={toggelModal} > <b>Game Settings</b>  </Button>
            <Modal
                
                open={Modal_IsOpen}
                onClose={() => {
                    SetModal_IsOpen(false);
                }}
            >
                <AmazeOnlineGameSettingsModal gameName={gameName} match_time={matchTime} IsOpen={Modal_IsOpen}/>
            </Modal>
            <br/>
            <Button variant="contained"  href="#contained-buttons" className={classes.button_for_Home}> <b>Quit</b>  </Button>
        </div>
      </>
    );
};

export default CreateGameComponent;