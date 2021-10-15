import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Sticker } from "../AmazeOnlineModels/grid-sticker";
import { Position } from "../AmazeOnlineModels/position";
import { appendStickerToGameMap, gameState } from "../AmazeOnlineStateSlices/amaze-game-slice";
import {  playerSlice, playerState } from "../AmazeOnlineStateSlices/amaze-player-slice"

function BoardGeneratorComponent (props : any)  {
    
    const playerinfo = useSelector(playerState);
    const gameinfo = useSelector(gameState);
    const dispatch = useDispatch();
    let cloud_emoji : string = '&#x2601;';
    let invader_emoji : string = '&#x1F47E;';
    let money_emoji : string = '&#x1F4B5;';


    useEffect(() => {
      generateBoard();
    }, [])
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
            background:'blue'
          },  
        form_setting: {
          alignContent : 'center',
          width:'45%',
          textAlign : 'center',
          margin:'2em'
        },  
        button_for_Home: {
          background: 'blue',
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

    const generateBoard = () => {
      for (let x = 0; x < 20; x++) {
        for (let y = 0; y < 20; y++) {
           if(playerinfo.player.current_position.x == x && playerinfo.player.current_position.y == y)
           {
             console.log('skipping ' , x , ' ' , y , ' ' , 'player is occupying that space');
             continue;
           }
          //  if(gameinfo.destination.x == x && gameinfo.destination.y == y)
          //  {
          //    console.log('skipping ' , x , ' ' , y , ' ' , 'destination is occupying that space');
          //    continue;
          //  }
          console.log('generating...' ,  x * 25 , ' ' , y * 25 , ' ' );
            dispatch(appendStickerToGameMap({coordinates : {x: x * 25 , y: y * 25 } as Position , image : cloud_emoji , width_percentage : 5 , hieght_percentage : 5 , position_type : 'absolute' }));
        }
      }
      console.log('board complete');
    }


     
    return(
        <>
        {gameinfo.game_map.map((S : Sticker) =>{
          return(
            <div  style={{ position : 'absolute',  width :` ${S.width_percentage}%`, height : ` ${S.hieght_percentage}%`, top : S.coordinates.y , left: S.coordinates.x }}>&#x2601;</div>
          )
        
        })
        }
      
        </>
    );
};

export default BoardGeneratorComponent;