import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ForwardIcon from '@material-ui/icons/Forward';
import { useHistory } from 'react-router-dom';
import { AccordionDetails, AccordionSummary, CardMedia, FormHelperText, InputLabel, Modal, NativeSelect, TextField } from '@material-ui/core';
import AmazeOnlineGameSettingsModal from './AmazeOnlineGameSettingsModal';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SettingsIcon from '@material-ui/icons/Settings';
import MapIcon from '@material-ui/icons/Map';
import { useDispatch, useSelector } from 'react-redux';
import { appState, changeToGameDisplay, changeToHomeDisplay } from '../../AmazeOnlineStateSlices/app-state-slice';
import LeaderBoardModal from '../AmazeOnlineLeaderBoardModal';
import SearchIcon from '@material-ui/icons/Search';
import MapSelectionModal from './AmazeOnlineMapSelectionModal';
import { Accordion, Box, Card, Divider, Fab, Tooltip, Typography } from '@mui/material';
import { gameState, setGameID } from '../../AmazeOnlineStateSlices/amaze-game-slice';
import { DataStore } from '@aws-amplify/datastore';
import { playerState } from '../../AmazeOnlineStateSlices/amaze-player-slice';
import { Match, Player, Position, Sticker } from '../../models';
import { authState } from '../../AmazeOnlineStateSlices/auth-slice';

 function GameSetUpComponent (props : any) {
  const history = useHistory();
  const [Modal_IsOpen , SetModal_IsOpen] = useState(false);
  const [leaderBoardModal_IsOpen , SetLeaderBoardModal_IsOpen] = useState(false);
  const [selectMapModal_IsOpen , SetSelectMapModal_IsOpen] = useState(false);
  const [mT , SetMT] = useState(30);
  const gameinfo = useSelector(gameState);
  const playerinfo = useSelector(playerState);

  const Auth_ = useSelector(authState);
  const [gameName , setGameName] = useState('');
  const [matchTime , setMatchTime] = useState(60);
  const app_state = useSelector(appState);
  const dispatch = useDispatch();
    const useStyles = makeStyles((theme) => ({
      root: {
        background: 'black',
        alignContent : 'center',
        fontFamily: 'Poiret One',
        fontSize:'2em',
        color: 'blue',
        width:'30%',
       
        left: '35%',
        textAlign : 'center',
        position: 'absolute'
      }, 
      welcome_page: {
        alignContent : 'center',
        textAlign : 'center',
        marginTop:'50%'
      },  
      button_for_Home: {
        background: 'green',
        color:'white',
        padding: '1em',
        margin: '10%'
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
  const toggelLeaderBoardModal = () => {
    SetLeaderBoardModal_IsOpen(!leaderBoardModal_IsOpen);
 }
 const toggelSelectMapModal = () => {
  SetSelectMapModal_IsOpen(!selectMapModal_IsOpen);
}



    const switch_to_game = async function ()  {
      dispatch(changeToGameDisplay());
    
      try{
            let newPlayer : Player = new Player({  username: Auth_.user.username , color: "blue" ,  location: {x: 0, y:0} as Position,  points: 0 ,  isDead: false ,  isHost: true });
            let newPlayer2 : Player = new Player({ username: "" , color: "red" ,  location: {x: 20, y: 20} as Position,  points: 0 ,  isDead: false ,  isHost: true });
            let time : number = gameinfo.match_time as number;

           let newMatch : Match = await DataStore.save(new Match({  name: gameName, host: newPlayer , matchTime: 60, player1: newPlayer, player2 : newPlayer2, gameMap: gameinfo.game_map as Sticker[] | [], closed: false } ));   
           dispatch(setGameID(newMatch.id));
            console.log("New Match : ", newMatch.name , " created at : " ,newMatch.createdAt , " Host : " ,  newMatch.host?.username ," Map Payload : " , newMatch.gameMap );
            }catch(eer: any){
              console.log(eer);
            }
        
      history.push('/game');
  }
  const switch_to_mapselect = () => {
    dispatch(changeToHomeDisplay());
    history.push('/selectmap');
 }
 const switch_to_findgame = () => {
  dispatch(changeToGameDisplay);
  history.push('/findgame');
}

const SetMatchTime = (e : any) => {
  SetMT(e.target.value);
}
    return(
      <>
      <div style={{left: '40%' , alignContent:'center'}}>
      
    
          <h2 style={{color: 'black' }}><span className={classes.display_span} >S</span> e t t i n g s </h2>
        <Divider variant="middle" />
        <br/>
        <Tooltip title="Play Online"color="primary">
          <Fab className={classes.button_for_Home} aria-label="add" onClick={switch_to_game} >
              <ForwardIcon />
          </Fab>
      
        </Tooltip>  
        -
        <Tooltip title="Game Settings">
           <Fab className={classes.button_for_Home} aria-label="add" onClick={toggelModal} >
              <SettingsIcon />
          </Fab>  
        </Tooltip>
        
          <Modal
                        open={Modal_IsOpen}
                        onClose={() => {
                            SetModal_IsOpen(false);
                        }}
                    >
                      <AmazeOnlineGameSettingsModal gameName={gameName} match_time={matchTime} IsOpen={SetModal_IsOpen} setGameName={setGameName}/>
              </Modal>
              <br/>
                    
              <br/>
                  
                    <h2 style={{color: 'black' }}><span className={classes.display_span} >M</span>aps </h2>
               <MapSelectionModal IsOpen={false}/>
     
        </div>
      </>
    );
};

export default GameSetUpComponent;