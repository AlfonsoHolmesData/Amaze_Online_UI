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
import { gameState } from '../../AmazeOnlineStateSlices/amaze-game-slice';
import { DataStore } from '@aws-amplify/datastore';
import { playerState } from '../../AmazeOnlineStateSlices/amaze-player-slice';

 function GameSetUpComponent (props : any) {
  const history = useHistory();
  const [Modal_IsOpen , SetModal_IsOpen] = useState(false);
  const [leaderBoardModal_IsOpen , SetLeaderBoardModal_IsOpen] = useState(false);
  const [selectMapModal_IsOpen , SetSelectMapModal_IsOpen] = useState(false);
  const [mT , SetMT] = useState(30);
  const gameinfo = useSelector(gameState);
  const playerinfo = useSelector(playerState);

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
    //  let stickerTransferArray : Sticker[] = [];
      try{
        
          //   // create player
          //   await DataStore.save(new Player({ username: "Fonsolo", color: "blue", location: playerinfo.player.current_position as Position, points: 0, isDead: false, isHost: true   } ));
          //   let newPlayer  =  await DataStore.query(Player , "Fonsolo");
          //   console.log(newPlayer);
          //   // create match
            
          //   // gameinfo.game_map.forEach((element)=> {
          //   //     stickerTransferArray.push(new Sticker({
          //   //       position: element.coordinates as Position ,
          //   //       image: element.image ,
          //   //       width_percentage: element.width_percentage ,
          //   //       height_percentage: element.hieght_percentage ,
          //   //       position_type: element.position_type ,
          //   //       visited: element.visited ,
          //   //       matchGameMapId: ""  }))
          //   // }); 
          //   //  await DataStore.save(new Match({  name: "Cave Carver", matchTime: gameinfo.match_time , player1: newPlayer, player2: undefined, gameMap: [], closed: false } ));   
          //   //  let newmatch = await DataStore.query(Match , "Cave Carver");
             
          //  // await DataStore.save( Match.copyOf( newmatch as Match , updated => { updated.gameMap  = stickerTransferArray as Sticker[] | [] }  ));
          //   // console.log(newmatch);
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