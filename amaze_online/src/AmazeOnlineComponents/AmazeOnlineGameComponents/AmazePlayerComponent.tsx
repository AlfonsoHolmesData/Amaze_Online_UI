import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux"
import { StickerDTO } from "../../AmazeOnlineModels/grid-sticker-DTO";
import { gameState, removeStickerFromGameMap, setRandomDestination } from "../../AmazeOnlineStateSlices/amaze-game-slice";
import {  addPoints, playerSlice, playerState, setIsEleminated, setPoints, subtractPoints } from "../../AmazeOnlineStateSlices/amaze-player-slice"
import { DataStore } from '@aws-amplify/datastore';
import { Match, Player, Position, Sticker } from "../../models";
import { useState } from "react";

interface iPlayerComponent {
  position: Position
  color: string
}
function PlayerComponent (props : iPlayerComponent)  {
    
    const playerinfo = useSelector(playerState);
    const gameinfo = useSelector(gameState);
    const dispatch = useDispatch();
    const [playerPos , setPlayerPos] = useState({x: 0, y: 0} as Position);
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
            background:`${props.color}`
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
    
      async function check_position(){ 
        
        

        for (let x = 0; x < gameinfo.game_map.length - 1 ; x++) {

          let playerIsIntersecting : boolean = gameinfo.game_map[x].position.x == props.position.x && gameinfo.game_map[x].position.y == props.position.y;
          if( playerIsIntersecting && gameinfo.game_map[x].image == 'question-mark.gif' || playerIsIntersecting && gameinfo.game_map[x].image == 'gadgetboy.gif' || playerIsIntersecting && gameinfo.game_map[x].image == 'loading.gif'){ 
            if(!gameinfo.game_map[x].visited){
              
              dispatch(addPoints(1200)); 
              
                // const original = await DataStore.query(Match , gameinfo.id);
                //                 DataStore.save(
                //                   Match.copyOf(original as Match , updated =>{ 
                //                     if(updated.player1?.username == playerinfo.player.username )
                //                     {
                //                       if(updated.player1)
                //                       {
                //                         updated.player1 = new Player({username: playerinfo.player.username , color: 'orange',  location: {x: 20, y: 20} as Position,  points: playerinfo.player.points ,  isDead: playerinfo.player.isDead ,  isHost: true });
                //                       }
                //                     }else{
                //                         if(updated.player2)
                //                       {
                //                         updated.player2 = new Player({username: playerinfo.player.username , color: 'orange',  location: {x: 20, y: 20} as Position,  points: playerinfo.player.points ,  isDead: playerinfo.player.isDead ,  isHost: false });
                //                       }
                //                     }
                                    
                //               }));
            }
           }
          if(playerIsIntersecting  )
          {
            if(!gameinfo.game_map[x].visited)
            {
              dispatch(subtractPoints(450));
              dispatch(removeStickerFromGameMap(x));
              // update match
            //   const original = await DataStore.query(Match , gameinfo.id);
            //   DataStore.save(
            //     Match.copyOf(original as Match , updated =>{ 
            //       if(updated.player1?.username == playerinfo.player.username )
            //       {
            //         if(updated.player1)
            //         {
            //           updated.player1 = new Player({username: playerinfo.player.username , color: 'orange',  location: playerinfo.player.location as Position,  points: playerinfo.player.points ,  isDead: playerinfo.player.isDead ,  isHost: true });
                      
            //         }
            //       }else{
            //           if(updated.player2)
            //         {
            //           updated.player2 = new Player({username: playerinfo.player.username , color: 'orange',  location: playerinfo.player.location as Position,  points: playerinfo.player.points ,  isDead: playerinfo.player.isDead ,  isHost: false });
            //         }
            //       }
            //       let convertedMap : Sticker[] = [];
            //       // convert UnpackedSticker to  RunTimeSticker
            //       updated?.gameMap.forEach((e) => {
            //                   convertedMap.push({  
            //                      position : { x: e?.position?.x , y : e?.position?.y} as Position ,
            //                      image : e?.image , 
            //                      width_percentage : e?.width_percentage ,
            //                      height_percentage : e?.height_percentage ,
            //                      position_type : 'absolute'  ,
            //                      visited : e?.visited
            //                    } as Sticker) 
            //       });
            
                
            
            //       updated.gameMap =   convertedMap as Sticker[] | [];
            // }));
            }

           
          }
            
      }
        if(gameinfo.destination.x == props.position.x && gameinfo.destination.y == props.position.y )
        {
          dispatch(addPoints(500));
           dispatch(setRandomDestination());
        }
        if(gameinfo.destination.x == props.position.x && gameinfo.destination.y == props.position.y ){ dispatch(addPoints(500));  }
       
    }
      check_position();
     
    return(
        <>                                               
        {                                                //@ts-ignore
        props.position.x >= 500 ||  props.position.y >= 500 || props.position.x < 0 ||  props.position.y  < 0
         ?
            <div className={classes.player} style={{top : 0, left: 0}}>&#x2620;</div>
         :
            <div className={classes.player}  style={{ top : props.position.y , left: props.position.x}}>&#x1F451;</div>
        }
      
        </>
    );
};

export default PlayerComponent;

