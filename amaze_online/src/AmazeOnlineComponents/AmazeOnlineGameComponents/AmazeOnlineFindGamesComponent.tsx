import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Modal, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import AmazeOnlineGameSettingsModal from './AmazeOnlineGameSettingsModal';
import { useDispatch, useSelector } from 'react-redux';
import { appState, changeToGameDisplay } from '../../AmazeOnlineStateSlices/app-state-slice';
import LeaderBoardModal from '../AmazeOnlineLeaderBoardModal';
import MapSelectionModal from './AmazeOnlineMapSelectionModal';
import { TableHead } from '@mui/material';
import { Match } from '../../models';
import { gameState } from '../../AmazeOnlineStateSlices/amaze-game-slice';
import { DataStore } from '@aws-amplify/datastore';

 function FindGameComponent (props : any) {
  const history = useHistory();
  const [matches , setMatches] = useState([] as Match[]);
  const dispatch = useDispatch();
  const gameinfo = useSelector(gameState);

  useEffect(() => {
    // TODO: finish setup 
   const sub = DataStore.observe(Match).subscribe( () => { fetchMatches(); } );
    return() =>  sub.unsubscribe();
  } , [])

    const useStyles = makeStyles((theme) => ({
      root: {
        background: 'white',
        alignContent : 'center',
        textAlign : 'center',
        marginTop:'10%'
      }, 
      table_cell: {
        background: 'blue',
        textAlign : 'center',
        fontFamily: 'Poiret One',
        opacity : '100%',
        color:'white '
      },
      table_rowd: {
        background: '#DBDFE7',
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


const fetchMatches = async function ()  {
    let liveMatches : Match[] = await DataStore.query(Match);
    setMatches(liveMatches);

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
                  <TableCell className={classes.table_cell} >Match Time</TableCell>
                  <TableCell className={classes.table_cell}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {matches.map((M : Match , index ) => (
                  <TableRow key={M.id}  >
                    <TableCell className={classes.table_rowd} > {M.name} </TableCell>
                    <TableCell className={classes.table_rowd}>{gameinfo.host}</TableCell>
                    <TableCell className={classes.table_rowd}>{M.matchTime}</TableCell>
                    <TableCell className={classes.table_rowd}>{M.closed ? <span>Closed</span> :<span>Open</span> }</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
            
        
        </div>
      </>
    );
};

export default FindGameComponent;