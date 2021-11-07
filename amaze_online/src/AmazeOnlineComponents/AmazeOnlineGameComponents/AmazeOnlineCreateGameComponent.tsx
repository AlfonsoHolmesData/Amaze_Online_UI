import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ForwardIcon from '@material-ui/icons/Forward';
import { useHistory } from 'react-router-dom';
import { CardMedia, Modal } from '@material-ui/core';
import AmazeOnlineGameSettingsModal from './AmazeOnlineGameSettingsModal';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SettingsIcon from '@material-ui/icons/Settings';
import MapIcon from '@material-ui/icons/Map';
import { useDispatch, useSelector } from 'react-redux';
import { appState, changeToGameDisplay, changeToHomeDisplay } from '../../AmazeOnlineStateSlices/app-state-slice';
import LeaderBoardModal from '../AmazeOnlineLeaderBoardModal';
import SearchIcon from '@material-ui/icons/Search';
import MapSelectionModal from './AmazeOnlineMapSelectionModal';
import { Box, Card, Divider, Fab, Tooltip, Typography } from '@mui/material';

 function CreateGameComponent (props : any) {
  const history = useHistory();
  const [Modal_IsOpen , SetModal_IsOpen] = useState(false);
  const [leaderBoardModal_IsOpen , SetLeaderBoardModal_IsOpen] = useState(false);
  const [selectMapModal_IsOpen , SetSelectMapModal_IsOpen] = useState(false);

  const [gameName , setGameName] = useState('');
  const [matchTime , setMatchTime] = useState(60);
  const app_state = useSelector(appState);
  const dispatch = useDispatch();
    const useStyles = makeStyles((theme) => ({
      root: {
        background: 'white',
        alignContent : 'center',
        fontFamily: 'Poiret One',
        boxShadow: 'black 20px 10px 50px',
        fontSize:'2em',
        color: 'blue',
        padding: '1em',
        width:'30%',
        height:'40%',
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

    const switch_to_game = () => {
      dispatch(changeToGameDisplay());
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

    return(
      <>
      <div style={{left: '40%' , boxShadow: 'black 20px 10px 50px'}}>
      
        <Card className={classes.root}>
          <h2><span className={classes.display_span} >M</span> e n u </h2>
        <Divider variant="middle" />
        <br/>
        <Tooltip title="Play"color="primary">
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
        -
          <Modal
                        open={Modal_IsOpen}
                        onClose={() => {
                            SetModal_IsOpen(false);
                        }}
                    >
                      <AmazeOnlineGameSettingsModal gameName={gameName} match_time={matchTime} IsOpen={SetModal_IsOpen} setGameName={setGameName}/>
              </Modal>

        <Tooltip title="LeaderBoard" style={{background: 'white' }}>
          <Fab className={classes.button_for_Home} aria-label="add" onClick={toggelLeaderBoardModal} >
            <EqualizerIcon />
          </Fab>
        </Tooltip>
        -
              <Modal
                      open={leaderBoardModal_IsOpen}
                      onClose={() => {
                        SetLeaderBoardModal_IsOpen(false);
                      }}
                  >
                      <LeaderBoardModal IsOpen={leaderBoardModal_IsOpen}  />
              </Modal>

          <Tooltip title="Map Select" style={{background: 'white' }}>
          <Fab className={classes.button_for_Home} aria-label="add"  onClick={switch_to_mapselect} >
             <MapIcon />
          </Fab>
          </Tooltip>
          -
          <Tooltip title="Find Match" style={{background: 'white' }}>
          <Fab className={classes.button_for_Home} aria-label="add"  onClick={switch_to_findgame} >
             <SearchIcon />
          </Fab>
          </Tooltip>
        </Card>
        </div>
      </>
    );
};

export default CreateGameComponent;