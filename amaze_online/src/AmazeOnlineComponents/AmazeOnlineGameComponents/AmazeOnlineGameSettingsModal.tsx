import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Box, Container, InputLabel, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { gameState, setGame } from '../../AmazeOnlineStateSlices/amaze-game-slice';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Position } from '../../AmazeOnlineModels/position';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Sticker } from '../../AmazeOnlineModels/grid-sticker';
import { UploadMapDTO } from '../../AmazeOnlineModels/custom-game-map-request-model';
import { downloadUserMaps } from '../../AmazeOnlineRemoteClient/User-service';
import { FixedSizeList, ListChildComponentProps } from 'react-window';


interface iGameSettingsModal {
  gameName: string,
  setGameName: (gn: string) => void,
  match_time: number,
  IsOpen: (nextIsOpenVal: boolean) => void
}

 function GameSettingsModal (props : iGameSettingsModal) {
  const history = useHistory();
  const [mT , SetMT] = useState(30);
  const [gameMaps , setGameMaps] = useState([] as UploadMapDTO[]);
 // const []
  const dispatch = useDispatch();
  let default_settings = {
    id:                  '9907-hb86f-98f8f8c-89gyb',
    has_navigator:       false,
    has_runner:          true,
    game_set:            false,
    is_active:           true,
    destination:         {x: 0, y: 0 } as Position,
    start_position:      {x: 0, y: 0 } as Position,
    runner_psotion:      {x: 0, y: 0 } as Position,
    game_map:            [] as Sticker[] ,
    current_instruction: '',
    match_time:          mT
  };
    const useStyles = makeStyles((theme) => ({
      modal_template: {
        boarder: ' 2em solid blue',
        borderRadius : '1em',
        position: 'relative',
        background: 'white',
        boxShadow: 'black 20px 10px 50px',
        fontFamily: 'Poiret One',
        alignContent : 'center',
        textAlign : 'center',
        width : '500px',
        height : '600px',
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
        fontFamily: 'Poiret One',
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
const SetMatchName = (e : any) => {
  props.setGameName(e.target.value);
}
  const createGame = () => {
   dispatch(setGame(default_settings));
   setTimeout(() => {
     props.IsOpen(false);
   } , 500);
}

const getMaps = async function() {
 let maps : UploadMapDTO[] = await downloadUserMaps('');
 setGameMaps(maps);

}

    return(
      <>


        <Container className={classes.modal_template}>
        <br/>
        <br/>
            <h1>Game Settings</h1>
        
            <TextField id="standard-basic" label="Game Name" className={classes.form_setting} value={props.gameName} onChange={SetMatchName}/>
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
                  <FormHelperText>how long you would like the round to last?</FormHelperText>
              </FormControl>
            <br/> 
            <Button variant="contained"  href="#contained-buttons" className={classes.button_for_Home} onClick={createGame}> <b>Create</b>  </Button>
        </Container>
      </>
    );
};

export default GameSettingsModal;