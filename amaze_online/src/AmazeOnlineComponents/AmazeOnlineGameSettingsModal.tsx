import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Box, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { gameState, setGame } from '../AmazeOnlineStateSlices/amaze-game-slice';
import { Position } from '../AmazeOnlineModels/position';

interface iGameSettingsModal {
  gameName: string,
  setGameName: (gn: string) => void,
  match_time: number,
  setMatch_time: (mt: string) => void,
  IsOpen: (nextIsOpenVal: boolean) => void
}

 function GameSettingsModal (props : any) {
  const history = useHistory();
  
  const dispatch = useDispatch();
    const useStyles = makeStyles((theme) => ({
      root: {
        position: 'relative',
        background: 'white',
        boxShadow: 'black 20px 10px 50px',
        fontFamily: 'Poiret One',
        alignContent : 'center',
        textAlign : 'center',
        width : '500px',
        height : '500px',
        margin:'50px auto'
      },
      form_setting: {
        alignContent : 'center',
        width:'45%',
        textAlign : 'center',
        margin:'2em'
      },  
      button_for_Home: {
        background: 'blue',
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


    const switch_to_game = () => {
      history.push('/creategame');
  }
  const createGame = () => {
   
   
}

    return(
      <>
        <Box className={classes.root}>
        <br/>
        <br/>
            <h1>Game Settings</h1>
        
            <TextField id="standard-basic" label="Game Name" className={classes.form_setting} />
            <br/>
            <TextField id="standard-basic" label="Match Time" className={classes.form_setting}/>
            <br/>
            <Button variant="contained"  href="#contained-buttons" className={classes.button_for_Home}> <b>Create</b>  </Button>
        </Box>
      </>
    );
};

export default GameSettingsModal;