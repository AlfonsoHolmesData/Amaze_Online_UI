import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux"
import { StickerDTO } from "../AmazeOnlineModels/grid-sticker-DTO";
import { gameState, removeStickerFromGameMap, setRandomDestination } from "../AmazeOnlineStateSlices/amaze-game-slice";
import {  addPoints, playerSlice, playerState } from "../AmazeOnlineStateSlices/amaze-player-slice"

function PlayerComponent (props : any)  {
    
    const playerinfo = useSelector(playerState);
    const gameinfo = useSelector(gameState);
    const dispatch = useDispatch();
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
    
      function check_position(){ 
        
        for (let x = 0; x < gameinfo.game_map.length - 1 ; x++) {
          if(gameinfo.game_map[x].coordinates.x == playerinfo.player.current_position.x && gameinfo.game_map[x].coordinates.y == playerinfo.player.current_position.y )
          {
           
           dispatch(removeStickerFromGameMap(x));
          }
            
      }
        if(gameinfo.destination.x == playerinfo.player.current_position.x && gameinfo.destination.y == playerinfo.player.current_position.y )
        {
          dispatch(addPoints(300));
           dispatch(setRandomDestination());
        }
       
    }
      check_position();
     
    return(
        <>
        {playerinfo.player.current_position.x >= 500 ||  playerinfo.player.current_position.y >= 500 || playerinfo.player.current_position.x < 0 ||  playerinfo.player.current_position.y < 0
         ?
            <div className={classes.player} style={{top : 0, left: 0}}>&#x2620;</div>
         :
            <div className={classes.player}  style={{ top : playerinfo.player.current_position.y , left: playerinfo.player.current_position.x}}>&#x1F451;</div>
        }
      
        </>
    );
};

export default PlayerComponent;