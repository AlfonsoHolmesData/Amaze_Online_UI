import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Box, Container, InputLabel, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { gameState, setGame } from '../AmazeOnlineStateSlices/amaze-game-slice';
import { Position } from '../AmazeOnlineModels/position';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

interface iGameSettingsModal {
  gameName: string,
  setGameName: (gn: string) => void,
  match_time: number,
  setMatch_time: (mt: string) => void,
  IsOpen: (nextIsOpenVal: boolean) => void
}

 function GameSettingsModal (props : any) {
  const history = useHistory();
  const [mT , SetMT] = useState(30);
  const dispatch = useDispatch();
    const useStyles = makeStyles((theme) => ({
      modal_template: {
        boarder: 'solid 2em blue',
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

  const SetMatchTime = (e : any) => {
    SetMT(e.target.value);
}
  const createGame = () => {
   
   
}

    return(
      <>
        <Container className={classes.modal_template}>
        <br/>
        <br/>
            <h1>Game Settings</h1>
        
            <TextField id="standard-basic" label="Game Name" className={classes.form_setting} />
            <br/>
            <FormControl className={classes.form_setting}>
              <InputLabel htmlFor="age-native-helper">Match Time (secs)</InputLabel>
                <NativeSelect
                  value={mT}
                  onChange={SetMatchTime}
                  inputProps={{
                    name: 'age',
                    id: 'age-native-helper',
                  }}
                >
                  <option aria-label="None" value={30} >default</option>
                  <option value={45}>45</option>
                  <option value={60}>60</option>
                  <option value={75}>75</option>
                  <option value={90}>90</option>
                  <option value={130}>130</option>
                </NativeSelect>
              <FormHelperText>how long you would like the round to last</FormHelperText>
          </FormControl>
            <br/>
            <Button variant="contained"  href="#contained-buttons" className={classes.button_for_Home}> <b>Create</b>  </Button>
        </Container>
      </>
    );
};

export default GameSettingsModal;