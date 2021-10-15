import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { onUpdateGame } from '../graphql/subscriptions';
import { clearScreenDown } from 'readline';
import { Position } from '../AmazeOnlineModels/position';
import AmazePlayerComponent from './AmazePlayerComponent';
import { moveDown, moveLeft, moveRight, moveUp, playerState } from '../AmazeOnlineStateSlices/amaze-player-slice';
import { useDispatch, useSelector } from 'react-redux';
import { countDown, gameState } from '../AmazeOnlineStateSlices/amaze-game-slice';

 function GameComponent (this: any, props : any) {
  const history = useHistory();
  const dispatch = useDispatch();
  const gameinfo = useSelector(gameState);

  

    const useStyles = makeStyles((theme) => ({
      root: {
        position: 'absolute',
        top: '40%',
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
      button_div: {
        position: 'relative',
        top: '50%',
        left: '87%'
      },
      labels: {
        textAlign : 'center',
        color:'#DBDFE7',
        fontFamily: 'Poiret One'
      },
     
      welcome_page: {
        alignContent : 'center',
        textAlign : 'center',
        marginTop:'50%'
      },  
      button_for_up: {
        background: 'green',
        fontFamily: 'Poiret One',
        color:'white',
        margin: '.5em'
      },
      button_for_left: {
        background: 'orange',
        fontFamily: 'Poiret One',
        color:'white',
        margin: '.5em'
      },
      button_for_down: {
        background: '#4E3E61',
        fontFamily: 'Poiret One',
        color:'white',
        margin: '.5em'
      },
      button_for_right: {
        background: 'blue',
        fontFamily: 'Poiret One',
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
    
  
    const HandleMoveRight = () =>
    {
     
      dispatch(moveRight(25));
      console.log(playerinfo.player.current_position , 'pos');
     
    }
    const HandleMoveLeft= () =>
    {
     
      dispatch(moveLeft(25));
      console.log(playerinfo.player.current_position , 'pos');
     
    }

    const HandleMoveUp = () =>
    {
     
      dispatch(moveUp(25));
      console.log(playerinfo.player.current_position , 'pos');
     
    }
    const HandleMoveDown= () =>
    {
     
      dispatch(moveDown(25));
      console.log(playerinfo.player.current_position , 'pos');
     
    }
   
    const timer = () =>
    {
     
      dispatch(countDown());
     
    }
    //game loop
    function startSimulation(speed : number)
    {
       
        
      setInterval(timer, 1000);
    }

   // startSimulation(1);
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
      <div >
      <h1 className={classes.labels} style={{ position : 'absolute', left: '1%'}} >I n s t r u c t i o n :</h1>
      <h1 className={classes.labels} >T i m e : {gameinfo.match_time}</h1>
        <div id="gameCanvas"   className={classes.root_canvas} >
            {/*this is the player avitar */ }
            <AmazePlayerComponent/> 
            <div className={classes.button_div}  > 
            <h1 className={classes.labels}>C o n t r o l s :</h1>
              <Button variant="contained"  className={classes.button_for_up} onClick={HandleMoveUp}  > <b>U p</b>  </Button>
                <br/>
                <Button variant="contained"  className={classes.button_for_left} onClick={HandleMoveLeft} ><b>L e f t</b> </Button> <Button variant="contained"  className={classes.button_for_right} onClick={HandleMoveRight} > <b>R i g h t</b>  </Button>
                <br/>
                <Button variant="contained"  className={classes.button_for_down} onClick={HandleMoveDown}  > <b>D o w n</b>  </Button>
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