import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { gameState, setGameMap } from "../../AmazeOnlineStateSlices/amaze-game-slice";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useState } from "react";
import { Sticker } from "../../AmazeOnlineModels/grid-sticker";
import { UploadMapDTO } from "../../AmazeOnlineModels/custom-game-map-request-model";
import { render } from "enzyme";
import { downloadUserMaps } from "../../AmazeOnlineRemoteClient/User-service";
import { UnpackedSticker } from "../../AmazeOnlineModels/grid-sticker-requst-model";
import { Button, List, ListItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export interface IMapSelectionModal {
  IsOpen : boolean
}
function MapSelectionModal(props:IMapSelectionModal ){
  const dispatch = useDispatch();
  const gameinfo = useSelector(gameState);
  const [isLoading , setIsLoading] = useState(false);
  const [mapIsSelected , setMapIsSelected] = useState(false);
  const [playerMaps , SetPlayerMaps] = useState([] as UploadMapDTO[]);
  const [currentMap , setCurrentMap] = useState(0);
  const history = useHistory();
  
  const useStyles = makeStyles((theme) => ({
    root: {
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    root_canvas: {
       background: 'black',
        width : '500px',
        height : '500px'
     
      },
      button_for_Home: {
        background: 'blue',
        fontFamily: 'Poiret One',
        color:'white',
        margin: '.5em'
      },
    select: {
      textAlign : 'center',
      color:'#DBDFE7',
      fontFamily: 'Poiret One',
      fontSize:'1em',
   
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    },
    title: {
      color: 'white',
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }));
  const classes = useStyles();
 
  const selectMap = (e: any  , key : number) =>{
      dispatch(setGameMap(playerMaps[key].blueprint));
      console.log(playerMaps[key]);

      setCurrentMap(key);
  }
  const downloadMyMaps = async () => {
    setIsLoading(true);
    if(playerMaps.length < 1)
    {
        try{
        let myMaps = await downloadUserMaps('Fansolo');
        SetPlayerMaps(myMaps);
      }catch(err : any)
      {
      
        console.log(err);
      }
    }
    setIsLoading(false);
  }

  return (
    <div className={classes.root}>
       
      <List  style={{ left: '35%' }}  >
        {playerMaps.map((M : UploadMapDTO , index) => {
            return(
                <ListItem key={M.id}>
                <div className={classes.root_canvas}  >
                <ImageListItemBar title={`- - - ${M.name} By ${M.creator}`}  style={{zIndex: 2, width: '35%' }} />
                    {M.blueprint.map((S : UnpackedSticker | undefined , index) =>{
            
                        return( 
                        
                          <div key={index} style={{ position : 'absolute',  width :` 22%`, height : ` 22%`, top : S?.y , left: S?.x }} >
                            
                            {   S?.visited == true 
                            ?  // if current node == has been visited by the player , dont render it
                                <b></b> 
                            : // else  render 
                            <img src={S?.image} width='5%'/>
                            }
                            </div>     )})}
          
               { index == currentMap ? 
                 <CheckCircleIcon style={{ position : 'relative',  color:'green', width :` 100px`, height : ` 100px` , top: '50%'}} />
               :
                 <IconButton onClick={(e) =>{selectMap(e , index)}}><CheckCircleOutlineIcon  style={{ position : 'relative',  color:'grey', width :` 100px`, height : ` 100px` , top: '50%'}}/> </IconButton> }
                      <br/>
                      </div>
          </ListItem>
          
                              )})}
       
      </List>
      <div style={{justifyContent: 'center',}}> 
                  { playerMaps.length > 0 ? 
                  
                  <> <Button variant="contained"  href="#contained-buttons" className={classes.button_for_Home}  onClick={() => { history.push('/game')}}> {isLoading ? <img src='loading.gif' width='40'/>  :<b>Play</b>}  </Button></> 
                  :
                  <Button variant="contained"  href="#contained-buttons" className={classes.button_for_Home}  onClick={downloadMyMaps}> {isLoading ? <img src='loading.gif' width='40'/>  :<b>Load Maps</b>}  </Button> } 
               </div>
       </div>     
   
  );

}
export default MapSelectionModal;