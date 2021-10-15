import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { onUpdateGame } from '../graphql/subscriptions';
import { clearScreenDown } from 'readline';
import { Position } from '../AmazeOnlineModels/position';
import AmazePlayerComponent from './AmazePlayerComponent';
import { moveHozizontal, playerState } from '../AmazeOnlineStateSlices/amaze-player-slice';
import { useDispatch, useSelector } from 'react-redux';
import { countDown, gameState } from '../AmazeOnlineStateSlices/amaze-game-slice';

 function GameComponent (this: any, props : any) {
  const history = useHistory();


  

    const useStyles = makeStyles((theme) => ({
      root: {
        background: 'green',
        boxShadow: 'black 20px 10px 50px',
        textAlign : 'center',
        color:'#DBDFE7',
        fontFamily: 'Poiret One',
        width : '200px',
        height : '100px',
        marginTop:'3%'
       
      },
      root_timer: {
        textAlign : 'center',
        color:'#DBDFE7',
        fontFamily: 'Poiret One'
     
      },
      root_canvas: {
        position: 'relative',
        background: 'black',
        color: 'white',
        boxShadow: 'black 20px 10px 50px',
        alignContent : 'center',
        textAlign : 'center',
        width : '500px',
        height : '500px',
        margin:'50px auto'
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
    const playerinfo = useSelector(playerState);
    
    const dispatch = useDispatch();
    const gameinfo = useSelector(gameState);
    const clearScreen = () =>
    {
     
      dispatch(moveHozizontal(5));
      console.log(playerinfo.player.current_position , 'pos');
     
    }

    const timer = () =>
    {
     
      dispatch(countDown());
      console.log(gameinfo.match_time, 'time');
     
    }
    //game loop
    function startSimulation(speed : number)
    {
       
        
      setInterval(timer, 1000/speed);
    }

    startSimulation(1);
    // Subscribe to creation of Todo
    // const subscription = API.graphql(
    //     graphqlOperat)ion(onUpdateGame)
    // ).subscribe({
    //     next: (update: any) => {
    //       console.log(update);
    //       // Do something with the data
    //     }
    // });
    
    // Stop receiving data updates from the subscription
    //subscription.unsubscribe();

    const switch_to_game = () => {
      history.push('/game');
  }
    return(
      <>
      <div style={{display: 'flex'}}>
      <h1 className={classes.root_timer} >T i m e : {gameinfo.match_time}</h1>
        <div id="gameCanvas"   className={classes.root_canvas} >
            {/*this is the player avitar */ }
            <AmazePlayerComponent/>
            <div>  
              <Button variant="contained"  className={classes.button_for_Home} > <b>Up</b>  </Button>
                <br/>
                <Button variant="contained"  href="#contained-buttons" className={classes.button_for_Home} onClick={clearScreen} > <b>Left</b>  </Button>
                <br/>
              </div>
        </div>

        <div id="gameCanvas"   className={classes.root} >
            <h1>U P</h1>
        </div>

      </div>
      </>
    );
};

export default GameComponent;