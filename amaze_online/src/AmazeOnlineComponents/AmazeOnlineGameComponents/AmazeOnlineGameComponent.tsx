import React, { useCallback, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { onUpdateGame } from '../../graphql/subscriptions';
import { clearScreenDown } from 'readline';
import { Position } from '../../AmazeOnlineModels/position';
import AmazePlayerComponent from './AmazePlayerComponent';
import { addPoints, moveDown, moveLeft, moveRight, moveUp, playerState, setPoints, teleprtTo } from '../../AmazeOnlineStateSlices/amaze-player-slice';
import { useDispatch, useSelector } from 'react-redux';
import { countDown, gameState, setGameMatchTime, setGameState } from '../../AmazeOnlineStateSlices/amaze-game-slice';
import BoardGeneratorComponent from './AmazeBoardGeneratorComponent';
import Timer from '../AmazeOnlineTimerComponent';
import renderTime from '../TimerHookUitil';


 function GameComponent (this: any, props : any) {
  const history = useHistory();
  const dispatch = useDispatch();
  const gameinfo = useSelector(gameState);
  const playerinfo = useSelector(playerState);
  const [isloading , setIsLoading] = useState(false);
  const [currentTime , setCurrentTime] = useState(60);
  const [buttonDown , setButtonDown] = useState(false);
  let t = 60;

    const useStyles = makeStyles((theme) => ({
      root: {
        position: 'absolute',
        top: '40%',
        background: 'green',
        boarder: ' solid 2em red ',
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
        boarder: ' solid 2em red ',
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

    const startMatch = () =>
    {
      setCurrentTime(gameinfo.match_time);
      dispatch(setPoints(4500));
      dispatch(setGameState(1));
      setIsLoading(true);
      setInterval(() => {setIsLoading(false)} , 3000);
      dispatch(teleprtTo({x: 0 , y: 0} as Position));
    }

    const restartMatch = () =>
    {
      setCurrentTime(gameinfo.match_time);
      dispatch(setPoints(4500));
      dispatch(setGameState(0));
      //teleprtTo
      
    } 

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
     
      dispatch(moveDown(25));
      console.log(playerinfo.player.current_position , 'pos');
     
    }
    const HandleMoveDown= () =>
    {
      //because the player style cooordinates are set to top and left we need to "move up" to go down  
      dispatch(moveUp(25));
      console.log(playerinfo.player.current_position , 'pos');
     
    }

    const playerMotor = () =>
        {
          if(playerinfo.isEleminated)
          {
            dispatch(setGameState(3));
          }
        }


    const detectFailure = () =>
        {
          if(currentTime <= 0 && gameinfo.game_state || playerinfo.player.points < 0 && gameinfo.game_state )
          {
            dispatch(setGameState(3));
          }
        }

        detectFailure();

    const renderGame = (gameState : number) =>{
      switch(gameState)
      {
        case 0:
          return(
            <>
            <div >
            <h1 className={classes.labels}  >W E L C O M E _ T R A V E L E R</h1>
            
              <div id="gameCanvas"   className={classes.root_canvas} >
                  <h1 className={classes.labels}>O P T I O N S :</h1>
                    <Button variant="contained"  className={classes.button_for_up} onClick={HandleMoveUp}  > <b>A B O R T</b>  </Button>
                      <br/>
                      <Button variant="contained"  className={classes.button_for_left} onClick={() =>{ }} ><b>N A V I G A </b> </Button> 
                      <Button variant="contained"  className={classes.button_for_right} onClick={() =>{ }} > <b>R U N N E R</b>  </Button>
                      <br/>
                      <Button variant="contained"  className={classes.button_for_down} onClick={ startMatch}  > <b>S t a r t </b>  </Button>
                    </div>
            </div>
            </>
          );
        break;
        case 1:
          return(
            <>
            <div >
            <h1 className={classes.labels} style={{ position : 'absolute', left: '80%' , top: '35%'}} >p o i n t s : <span  style={{ color : 'green'}}>${playerinfo.player.points}</span></h1>
            <h1 className={classes.labels} style={{ position : 'absolute', left: '1%' , top: '35%' }} >I n s t r u c t i o n :</h1>
            <Timer SetCurrentTime={setCurrentTime} onTimeout={() =>{console.log("TIME UP")}} start={gameinfo.match_time}/>
              <div id="gameCanvas"   className={classes.root_canvas} >
      
                  {/*this is the player avitar */ }
                  <AmazePlayerComponent/> 
                 { !isloading ? <BoardGeneratorComponent /> : <div style={{ position : 'relative', left: '0%' , top: '36%'  }}> <p>Generating...</p><img src='loading.gif' width='100' /></div> }
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

        break;
        case 2:
        return(
          <>
          <div >
          <h1 className={classes.labels}  >P A U S E D</h1>
          
            <div id="gameCanvas"   className={classes.root_canvas} >
                <h1 className={classes.labels}>O P T I O N S :</h1>
                  <Button variant="contained"  className={classes.button_for_left} onClick={HandleMoveUp}  > <b>R E S U M E</b>  </Button>
                    <br/>
                    <Button variant="contained"  className={classes.button_for_up} onClick={HandleMoveUp}  > <b>A B O R T</b>  </Button>
                    <br/>
                    <Button variant="contained"  className={classes.button_for_down} onClick={ restartMatch}  > <b>R E S t a r t </b>  </Button>
                  </div>
          </div>
          
          </>
          );
        break;
        case 3:
          return(
            <>
            <div >
            <h1 className={classes.labels}  >G A M E  O V E R</h1>
            
              <div id="gameCanvas"   className={classes.root_canvas} >
                  <h1 className={classes.labels}>O P T I O N S :</h1>


                    <Button variant="contained"  className={classes.button_for_up} onClick={HandleMoveUp}  > <b>A B O R T</b>  </Button>
                      <br/>
                      <br/>
                      <Button variant="contained"  className={classes.button_for_down} onClick={restartMatch}  > <b>R E S t a r t </b>  </Button>
                    </div>
            </div>
            </>
          );
        break;

      }
    }
   
    //game loop
  
  //startSimulation(1);

   // Subscribe to creation of Todo

    return(
      <>
         {renderGame(gameinfo.game_state)}
      </>
    );

    
};

export default GameComponent;

