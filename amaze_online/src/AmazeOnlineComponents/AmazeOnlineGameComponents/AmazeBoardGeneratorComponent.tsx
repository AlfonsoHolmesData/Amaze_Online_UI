import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import { Sticker } from "../../AmazeOnlineModels/grid-sticker";
import { StickerDTO } from "../../AmazeOnlineModels/grid-sticker-DTO";
import { Position } from "../../AmazeOnlineModels/position";
import { appendStickerToGameMap, gameState, generateRandomizedMap, replaceStickerOnMap, setDestination, setGameSet, setRandomDestination } from "../../AmazeOnlineStateSlices/amaze-game-slice";
import {  playerSlice, playerState } from "../../AmazeOnlineStateSlices/amaze-player-slice"
import { createMapState } from "../../AmazeOnlineStateSlices/create-gamemap-slice";

function BoardGeneratorComponent (props : any)  {
    
    const [done , setDone] = useState(false);
    const create = useSelector(createMapState);
    const gameinfo = useSelector(gameState);   

    const history = useHistory();
    const dispatch = useDispatch();
    let cloud_emoji : string  = '&#x2601;';
    let invader_emoji  : string  = '&#x1F47E;';
    let money_emoji : string = '&#x1F4B5;';
    let robot_gif : any  = "robot.gif";
    let questionmark_gif : any  = "question-mark.gif";

    
    const useStyles = makeStyles((theme) => ({
        root: {
          position: 'relative',
          background: 'white',
          boxShadow: 'black 20px 10px 50px',
          fontFamily: 'Poiret One',
          alignContent : 'center',
          textAlign : 'center',
          width : '500px',
          height : '500px',
          margin:'50px auto'
        },
        player: {
            position : 'absolute',
            width : '5%',
            height : '5%',
            background:'green'
          },  
        form_setting: {
          alignContent : 'center',
          width:'45%',
          textAlign : 'center',
          margin:'2em'
        },  
        button_for_Home: {
          background: 'green',
          color:'white',
          margin: '.5em'
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

    const generatePremadeMap = () => {

      if(gameinfo.game_map.length <= 0)
      history.push('/selectmap');
      else{
         dispatch(setRandomDestination());
      setDone(true);
      // trigger game to start timer
      dispatch(setGameSet(true));
      console.log('board complete');
      }
     
    }

    const generateRandomMap = () => {
      dispatch(setRandomDestination());
       dispatch(generateRandomizedMap());
      setDone(true);
      // trigger game to start timer
      dispatch(setGameSet(true));
      console.log('board complete');
    }

   

    
   

     
    return(
        <>
        { !done ?  
        <>
          <Button variant="contained"  className={classes.button_for_left} onClick={generateRandomMap} ><b>R a n d o m?</b> </Button> 
          or
          <Button variant="contained"  className={classes.button_for_right} onClick={generatePremadeMap} > <b>P r e m a d e?</b>  </Button>
          </>
                      :
                      <>
                      {gameinfo.game_map.map((S : Sticker , index) =>{
          
                        return( 
                        
                          <div key={index} style={{ position : 'absolute',  width :` ${S.width_percentage}%`, height : ` ${S.hieght_percentage}%`, top : S.coordinates.y , left: S.coordinates.x }} >
                            
                             {
                                gameinfo.destination.x == S.coordinates.x && gameinfo.destination.y == S.coordinates.y 
                             ?  // if current node == destination distinguish it as a destination
                                <>  <img src={robot_gif} width='20'/>   </> // invader emoji
                             :// else
                               S.visited == true 
                             ?  // if current node == has been visited by the player , dont render it
                                <b></b> 
                             : // else  render 
                             <img src={S.image} width='20'/>
                             }
                          </div>
                        )
                      
                      })
                      }
                      </>

        }
        </>
    );
};

export default BoardGeneratorComponent;