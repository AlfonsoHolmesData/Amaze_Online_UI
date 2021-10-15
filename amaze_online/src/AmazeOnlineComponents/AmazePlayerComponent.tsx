import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux"
import { moveHozizontal, playerSlice, playerState } from "../AmazeOnlineStateSlices/amaze-player-slice"

function PlayerComponent (props : any)  {
    
    const playerinfo = useSelector(playerState);
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
    
     
    return(
        <>
        {playerinfo.player.current_position.x > 600||  playerinfo.player.current_position.x > 600
         ?
            <div className={classes.player} style={{top : 0, left: 0}}></div>
         :
            <div className={classes.player} style={{top : playerinfo.player.current_position.y, left: playerinfo.player.current_position.x}}></div>
        }
      
        </>
    );
};

export default PlayerComponent;