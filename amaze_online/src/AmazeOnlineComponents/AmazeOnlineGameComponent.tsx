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

 function GameComponent (this: any, props : any) {
  const history = useHistory();
  const [x , setX] = useState(0);
  let x_pos : number = 0;
  let y_pos : number = 0;
  let playerPos : Position[] = [{x : 0 as number, y : 0 as number}] as Position[];

  

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
    const clearScreen = () =>
    {
      dispatch(moveHozizontal());
     
      console.log(playerinfo.player.current_position , 'pos');
     
    }
    //game loop
    function startSimulation(speed : number)
    {
       
        
      setInterval(clearScreen, 1000/speed);
    }

    startSimulation(3);
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
     <div id="gameCanvas"   className={classes.root_canvas} >
         {/*this is the player avitar */ }
         <AmazePlayerComponent/>
     </div>
     <div id="gameCanvas"   className={classes.root} >
        <h1>U P</h1>
     </div>
     </div>
       
      </>
    );
};

export default GameComponent;