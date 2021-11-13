import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Modal, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import AmazeOnlineGameSettingsModal from './AmazeOnlineGameSettingsModal';
import { useDispatch, useSelector } from 'react-redux';
import { appState, changeToGameDisplay } from '../../AmazeOnlineStateSlices/app-state-slice';
import LeaderBoardModal from '../AmazeOnlineLeaderBoardModal';
import MapSelectionModal from './AmazeOnlineMapSelectionModal';
import { TableHead } from '@mui/material';
import { Match, Player, Position } from '../../models';
import { gameState, setGameID, setGameMap } from '../../AmazeOnlineStateSlices/amaze-game-slice';
import { DataStore } from '@aws-amplify/datastore';
import { playerState, setUsername } from '../../AmazeOnlineStateSlices/amaze-player-slice';
import { authState } from '../../AmazeOnlineStateSlices/auth-slice';
import { UnpackedSticker } from '../../AmazeOnlineModels/grid-sticker-requst-model';

 function FindGameComponent (props : any) {
  const history = useHistory();
  const [matches , setMatches] = useState([] as Match[]);
  const [loading , setLoading] = useState(false);
  const dispatch = useDispatch();
  const gameinfo = useSelector(gameState);
  const Auth_ = useSelector(authState);

  const playerinfo = useSelector(playerState);

  useEffect(() => {
    // TODO: finish setup 
   const sub = DataStore.observe(Match).subscribe( () => { fetchMatches(); } );
    return() =>  sub.unsubscribe();
  } , [])

    const useStyles = makeStyles((theme) => ({
      root: {
        position: 'absolute',
        background: 'white',
        alignContent : 'center',
        width: '75%',
        left: '23%',
        textAlign : 'center',
        marginTop:'10%'
      }, 
      table_cell: {
        background: 'black',
        textAlign : 'center',
        fontFamily: 'Poiret One',
        opacity : '100%',
        color:'white '
      },
      table_rowd: {
        background: '#252526',
        textAlign : 'center',
        fontFamily: 'Poiret One',
        opacity : '98%',
        color:'grey '
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

    const switch_to_game = () => {
      dispatch(changeToGameDisplay);
      history.push('/game');
  }
  const switch_to_mapselect = () => {
    dispatch(changeToGameDisplay);
    history.push('/selectmap');
}

const deleteMatch = async function ( e: any ,  M : any)  {

   await DataStore.delete(M);
  
  console.log(matches);

}

const joinMatch = async  ( e: any ,  M : any) => {

  const original = await DataStore.query(Match , M.id);
  dispatch(setGameID(M.id))
  dispatch(setUsername(Auth_.user.username));
  DataStore.save(
    Match.copyOf(original as Match , updated =>{ 
      if(updated.player2)
      {
        updated.player2 = new Player({username: Auth_.user.username , color: 'orange',  location: {x: 20, y: 20} as Position,  points: playerinfo.player.points ,  isDead: playerinfo.player.isDead ,  isHost: false });
      }
 }));
 let convertedMap : UnpackedSticker[] = [];
 // convert RunTimeSticker to UnpackedSticker
 original?.gameMap.forEach((e) => {
             convertedMap.push({  
                x : e?.position?.x ,
                y : e?.position?.y ,
                image : e?.image , 
                width_percentage : e?.width_percentage ,
                height_percentage : e?.height_percentage ,
                position_type : 'absolute'  ,
                visited : e?.visited
              } as UnpackedSticker) 
 });

 dispatch(setGameMap(convertedMap));
 history.push('/game');
 console.log(matches);

    
}

const fetchMatches = async function ()  {

  
  try{
    setLoading(true);
    
    let liveMatches : Match[] = await DataStore.query(Match);
    
       setMatches(liveMatches);
     
         
    
    console.log( " RESULT : " ,liveMatches );
     setLoading(false);
  }catch(err: any){
    console.log( " RESULT : " , matches ," REASON : " ,err);
  }
  
}

    return(
      <>
        <div className={classes.root}>
        <TableContainer >
            <h1>Find Match</h1>
            <Table  >
              <TableHead>
                <TableRow className={classes.table_cell}>
                  <TableCell className={classes.table_cell}>Name</TableCell>
                  <TableCell className={classes.table_cell}>Host</TableCell>
                  <TableCell className={classes.table_cell}>points</TableCell>
                  <TableCell className={classes.table_cell}>Player Status</TableCell>
                  <TableCell className={classes.table_cell} >Match Time</TableCell>
                  <TableCell className={classes.table_cell}>Status</TableCell>
                  <TableCell className={classes.table_cell}>Delete</TableCell>
                  <TableCell className={classes.table_cell}>Join</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? 
                <img src='loading.gif' width='40'/>
                :
                <>
                {matches.map((M : Match , index ) => (
                  <TableRow key={M.id}  >
                    <TableCell className={classes.table_rowd} > {M.name} </TableCell>
                    <TableCell className={classes.table_rowd}>{M.player1?.username}</TableCell>
                    <TableCell className={classes.table_rowd}>{M.player1?.points}</TableCell>
                    <TableCell className={classes.table_rowd}>{M.player1?.isDead ? <Brightness1Icon style={{color : 'red'}}/>:<Brightness1Icon style={{color : 'green'}}/> }</TableCell>
                    <TableCell className={classes.table_rowd}>{M.matchTime}</TableCell>
                    <TableCell className={classes.table_rowd}>{M.closed ? <span>Closed</span> :<span>Open</span> }</TableCell>
                    <TableCell className={classes.table_rowd}><DeleteRoundedIcon onClick={(e) => deleteMatch(e , M )}/></TableCell>
                    <TableCell className={classes.table_rowd}><Button className={classes.button_for_Home} onClick={(e) => joinMatch(e , M )}>Join</Button></TableCell>
                  </TableRow>
                  
                ))}
                </>
                }
            
              </TableBody>
            </Table>
          </TableContainer>
            
        </div>
      </>
    );
};

export default FindGameComponent;