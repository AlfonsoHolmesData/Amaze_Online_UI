import React, { useCallback, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';

import { clearScreenDown } from 'readline';
import { Position } from '../../AmazeOnlineModels/position';
import AmazePlayerComponent from './AmazePlayerComponent';
import { addPoints, moveDown, moveLeft, moveRight, moveUp, playerState, setPoints, teleprtTo } from '../../AmazeOnlineStateSlices/amaze-player-slice';
import { useDispatch, useSelector } from 'react-redux';
import { countDown, gameState, setGameMatchTime, setGameSet, setGameState } from '../../AmazeOnlineStateSlices/amaze-game-slice';
import BoardGeneratorComponent from './AmazeBoardGeneratorComponent';
import Timer from '../AmazeOnlineTimerComponent';
import { timeState } from '../../AmazeOnlineStateSlices/global-time-slice';
import { DataStore } from '@aws-amplify/datastore';
import { Match, Player, Sticker } from '../../models';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { authState } from '../../AmazeOnlineStateSlices/auth-slice';
import { UnpackedSticker } from '../../AmazeOnlineModels/grid-sticker-requst-model';

 function GameComponent (this: any, props : any) {
  const history = useHistory();
  const dispatch = useDispatch();
  const gameinfo = useSelector(gameState);
  const playerinfo = useSelector(playerState);
  const Auth_ = useSelector(authState);
  const [isloading , setIsLoading] = useState(false);
  const [currentTime , setCurrentTime] = useState(60);
  const [match , setMatch] = useState({
                                        id:'',
                                        name: '',
                                        host: {username: "" , color: "" ,  location: {x: 20, y: 20} as Position,  points: 0 ,  isDead: false ,  isHost: true } as Player,
                                        player1: {username: "" , color: "" ,  location: {x: 20, y: 20} as Position,  points: 0 ,  isDead: false ,  isHost: true } as Player,
                                        player2: {username: "" , color: "" ,  location: {x: 20, y: 20} as Position,  points: 0 ,  isDead: false ,  isHost: true } as Player,
                                        matchTime: 60,
                                        gameMap: [],
                                        closed: false
                                      } as Match );

  const [players , setPlayers] = useState([] as (Player | undefined)[] );
  const global_time = useSelector(timeState);
  const [buttonDown , setButtonDown] = useState(false);
  let t = 60;

    const useStyles = makeStyles((theme) => ({
      playerTable: {
        position: 'relative',
        top: '4%',
        left: '80%',
        background: 'white',
      

        color:'#DBDFE7',
        fontFamily: 'Poiret One',
         width: '200px'
       
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
      pointsHigh: {
        textAlign : 'center',
        color:'green',
        fontFamily: 'Poiret One'
      },
      pointsMedium: {
        textAlign : 'center',
        color:'blue',
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


   useEffect(() => {
    //  TODO: finish setup 
      
     const sub = DataStore.observe(Match).subscribe(() => {fetchMatch();});
     
      return() => {
        sub.unsubscribe();

      } 
    } , [playerinfo.player.location])


    const fetchMatch = async function ()  {
      if(match.name == '' || match.id == '' )
      {
         const currentMatch  = await DataStore.query(Match , gameinfo.id);
      console.log( 'match from database : ',currentMatch);
      let convertedMap : Sticker[] = [];
      // convert UnpackedSticker to  RunTimeSticker
      currentMatch?.gameMap.forEach((e) => {
                  convertedMap.push({  
                     position : { x: e?.position?.x , y : e?.position?.y} as Position ,
                     image : e?.image , 
                     width_percentage : e?.width_percentage ,
                     height_percentage : e?.height_percentage ,
                     position_type : 'absolute'  ,
                     visited : e?.visited
                   } as Sticker) 
      });

      let inMatch = new Match({  name: currentMatch?.name, 
        host: currentMatch?.host , 
        matchTime: 60, 
        player1: currentMatch?.player1, 
        player2 : currentMatch?.player2,
         gameMap: convertedMap as Sticker[] | [],
          closed: currentMatch?.closed } );
          setMatch(inMatch as any  );

      }else{
        const original   = await DataStore.query(Match , gameinfo.id);
        let inMatch = new Match(new Match({  name: original?.name, host: original?.host , matchTime: 60, player1: original?.player1, player2 : original?.player2, gameMap: original?.gameMap as Sticker[] | [], closed: original?.closed } ));
        DataStore.save(
          Match.copyOf(inMatch as Match , updated =>{ 
            if(updated.player1)
            {
              updated.player1 =  new Player({username: Auth_.user.username , color: "blue" ,  location: playerinfo.player.location as Position,  points: playerinfo.player.points ,  isDead: playerinfo.player.isDead ,  isHost: true });
            }

            if(updated.player2)
            {
              updated.player2 = new Player({username: Auth_.user.username , color: "orange" ,  location: playerinfo.player.location as Position,  points: playerinfo.player.points ,  isDead: playerinfo.player.isDead ,  isHost: false });
            }
              let convertedMap : Sticker[] = [];
                  // convert UnpackedSticker to  RunTimeSticker
                  updated?.gameMap.forEach((e) => {
                              convertedMap.push(new Sticker({  
                                 position : { x: e?.position?.x , y : e?.position?.y} as Position ,
                                 image : e?.image , 
                                 width_percentage : e?.width_percentage ,
                                 height_percentage : e?.height_percentage ,
                                 position_type : 'absolute'  ,
                                 visited : e?.visited
                               } )) 
                  });

                  updated.gameMap =   convertedMap as Sticker[] | [];
          })) ;
          setMatch(inMatch as any  ); 
          console.log( "Player 1 ",match?.player1);
 
      console.log( "Player 2 ", match?.player2);
     
    
    
    }
     
      

     
     
     
  }


    const startMatch = () =>
    {

      console.log(gameinfo.game_map);
      setCurrentTime(gameinfo.match_time);
      dispatch(setPoints(4500));
      dispatch(setGameState(1));
    
      dispatch(teleprtTo({x: 0 , y: 0} as Position));
    }

    const restartMatch = () =>
    {
      
      setCurrentTime(60);
      setCurrentTime(gameinfo.match_time);
      dispatch(setPoints(4500));
      dispatch(setGameState(0));
      //teleprtTo
      
    } 

    const HandleMoveRight = async function()  {
      if(match.host?.username == Auth_.user.username )
      {
        dispatch(moveRight(25));
        const original   = await DataStore.query(Match , gameinfo.id);
        let inMatch = new Match(new Match({  name: original?.name, host: original?.host , matchTime: 60, player1: original?.player1, player2 : original?.player2, gameMap: original?.gameMap as Sticker[] | [], closed: original?.closed } ));
        DataStore.save(
          Match.copyOf(inMatch as Match , updated =>{ 
            if(updated.player1)
            {
              updated.player1 =  new Player({username: Auth_.user.username , color: "blue" ,  location: playerinfo.player.location as Position,  points: playerinfo.player.points ,  isDead: playerinfo.player.isDead ,  isHost: true });
            }
            
          })) ;
        
      }else{
        dispatch(moveRight(25));
        const original   = await DataStore.query(Match , gameinfo.id);
        DataStore.save(
          Match.copyOf(original as Match , updated =>{ 
            if(updated.player2)
            {
              updated.player2 = new Player({username: Auth_.user.username , color: "orange" ,  location: playerinfo.player.location as Position,  points: playerinfo.player.points ,  isDead: playerinfo.player.isDead ,  isHost: false });
            }
            
          })) ;
      }
      

      let updatedMap = await DataStore.query(Match , gameinfo.id);
      setMatch(updatedMap as any  );

      console.log(playerinfo.player.location , 'pos');
     
    }

    const HandleMoveLeft  = async function()  {
      if(match.host?.username == Auth_.user.username )
      {
        dispatch(moveLeft(25));
        const original   = await DataStore.query(Match , gameinfo.id);
        DataStore.save(
          Match.copyOf(original as Match , updated =>{ 
            if(updated.player1)
            {
              updated.player1 =  new Player({username: Auth_.user.username , color: "blue" ,  location: playerinfo.player.location as Position,  points: playerinfo.player.points ,  isDead: playerinfo.player.isDead ,  isHost: true });
            }
            
          })) ;
        
      }else{
       dispatch(moveLeft(25));
        const original   = await DataStore.query(Match , gameinfo.id);
        DataStore.save(
          Match.copyOf(original as Match , updated =>{ 
            if(updated.player2)
            {
              updated.player2 = new Player({username: Auth_.user.username , color: "orange" ,  location: playerinfo.player.location as Position,  points: playerinfo.player.points ,  isDead: playerinfo.player.isDead ,  isHost: false });
            }
            
          })) ;
      }
      console.log(playerinfo.player.location , 'pos');
     let updatedMap = await DataStore.query(Match , gameinfo.id);
      setMatch(updatedMap as any  );
    }

    const HandleMoveUp  = async function()  {
     
      if(match.host?.username == Auth_.user.username )
      {
         dispatch(moveDown(25));
        const original   = await DataStore.query(Match , gameinfo.id);
        DataStore.save(
          Match.copyOf(original as Match , updated =>{ 
            if(updated.player1)
            {
              updated.player1 =  new Player({username: Auth_.user.username , color: "blue" ,  location: playerinfo.player.location as Position,  points: playerinfo.player.points ,  isDead: playerinfo.player.isDead ,  isHost: true });
            }
            
          })) ;
        
      }else{
        dispatch(moveDown(25));
        const original   = await DataStore.query(Match , gameinfo.id);
        DataStore.save(
          Match.copyOf(original as Match , updated =>{ 
            if(updated.player2)
            {
              updated.player2 = new Player({username: Auth_.user.username , color: "orange" ,  location: playerinfo.player.location as Position,  points: playerinfo.player.points ,  isDead: playerinfo.player.isDead ,  isHost: false }); 
            }
            
          })) ;
      }
     let updatedMap = await DataStore.query(Match , gameinfo.id);
      setMatch(updatedMap as any  );
      console.log(playerinfo.player.location , 'pos');
     
    }
    const HandleMoveDown = async function()  {

      if(match.host?.username == Auth_.user.username )
      {
        dispatch(moveUp(25));
        const original   = await DataStore.query(Match , gameinfo.id);
        DataStore.save(
          Match.copyOf(original as Match , updated =>{ 
            if(updated.player1)
            {
              updated.player1 =  new Player({username: Auth_.user.username , color: "blue" ,  location: playerinfo.player.location as Position,  points: playerinfo.player.points ,  isDead: playerinfo.player.isDead ,  isHost: true });
            }
            
          })) ;
        
      }else{
        dispatch(moveUp(25));
        const original   = await DataStore.query(Match , gameinfo.id);
        DataStore.save(
          Match.copyOf(original as Match , updated =>{ 
            if(updated.player2)
            {
              updated.player2 = new Player({username: Auth_.user.username , color: "orange" ,  location: playerinfo.player.location as Position,  points: playerinfo.player.points ,  isDead: playerinfo.player.isDead ,  isHost: false });
            }
            
          })) ;
      }
      //because the player style cooordinates are set to top and left we need to "move up" to go down  
      let updatedMap = await DataStore.query(Match , gameinfo.id);
      setMatch(updatedMap as any  );
      console.log(playerinfo.player.location , 'pos');
     
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
          if(global_time.current_ime < 0 && gameinfo.game_state || playerinfo.player.points < 0 && gameinfo.game_state == 1 )
          { 
            
            dispatch(setGameSet(false));
               setIsLoading(true);
               setInterval(() => {setIsLoading(false)} , 3000);
            dispatch(setGameState(3));
             // trigger game to stop timer
             
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
      
                  

                  {
                     /*check who the host is */ 
                    match.host?.username == Auth_.user.username ?
                        <>   {/*if this account is host then they are player 1 and player 2 will be controlled by the remote player */ }
                            <AmazePlayerComponent position={playerinfo.player.location}  color={match.player1?.color as string}/> 
                            <AmazePlayerComponent position={match.player2?.location as Position}  color={match.player2?.color as string }/> 
                        </> 
                      : 
                        <> {/*if this account is not host then they are player 2 and plyer 1 will be controlled by the remote player */ }
                            <AmazePlayerComponent position={playerinfo.player.location}  color={match.player2?.color as string}/> 
                            <AmazePlayerComponent position={match.player1?.location as Position}  color={match.player1?.color as string }/>
                        </>
                    }
                
                  <BoardGeneratorComponent /> 
                  <div className={classes.button_div}  > 
                  <h1 className={classes.labels}>C o n t r o l s :</h1>
                    <Button variant="contained"  className={classes.button_for_up} onClick={HandleMoveUp}  > <b>U p</b>  </Button>
                      <br/>
                      <Button variant="contained"  className={classes.button_for_left} onClick={HandleMoveLeft} ><b>L e f t</b> </Button> <Button variant="contained"  className={classes.button_for_right} onClick={HandleMoveRight} > <b>R i g h t</b>  </Button>
                      <br/>
                      <Button variant="contained"  className={classes.button_for_down} onClick={HandleMoveDown}  > <b>D o w n</b>  </Button>
                    </div>
              </div>
      
              
                
                <div id="gameCanvas"   className={classes.playerTable} > 
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
              <div className={classes.playerTable}>
            <h1 className={classes.labels}>Players</h1>
            <Table  >
              <TableHead>
                <TableRow >
                  <TableCell className={classes.labels}>name</TableCell>
                  <TableCell className={classes.labels}>points</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
               
                  <TableRow  >
                    <TableCell  > {match.player1?.username} </TableCell>
                    <TableCell className={classes.pointsMedium}>{match.player1?.points}</TableCell>
                  </TableRow>
                  <TableRow   >
                    <TableCell  > {match.player2?.username} </TableCell>
                    <TableCell className={classes.pointsHigh}>{match.player2?.points}</TableCell>
                  </TableRow>
               
               
              </TableBody>
            </Table>
          </div>
        
         { !isloading ?  
         renderGame(gameinfo.game_state)
        :
        <div style={{ position : 'relative', left: '0%' , top: '36%'  }}> <p>Generating...</p><img src='loading.gif' width='100' /></div>
        }
      </>
    );

    
};

export default GameComponent;

