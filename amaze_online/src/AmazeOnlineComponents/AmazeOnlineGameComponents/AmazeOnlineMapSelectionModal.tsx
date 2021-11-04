import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import { gameState } from "../../AmazeOnlineStateSlices/amaze-game-slice";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useState } from "react";
import { Sticker } from "../../AmazeOnlineModels/grid-sticker";
import { UploadMapDTO } from "../../AmazeOnlineModels/custom-game-map-request-model";
import { render } from "enzyme";

function MapSelectionModal(props: any){
  const gameinfo = useSelector(gameState);
  const [playerMaps , SetPlayerMaps] = useState([]);
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: 'white',
    },
    root_canvas: {
        position: 'relative',
        background: 'black',
        color: 'white',
        boxShadow: 'black 20px 10px 50px',
        boarder: ' solid 2em red ',
        alignContent : 'center',
        textAlign : 'center',
        width : '200px',
        height : '200px',
        margin:'50px auto'
      },
    imageList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
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

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {playerMaps.map((M : UploadMapDTO) => {
            return(
                <ImageListItem key={M.id}>
                <div className={classes.root_canvas}>
                    {M.blueprint.map((S : Sticker , index) =>{
            
                        return( 
                        
                            <div key={index} style={{ position : 'absolute',  width :` ${S.width_percentage}%`, height : ` ${S.hieght_percentage}%`, top : S.coordinates.y , left: S.coordinates.x }} >
                            
                            {
                                gameinfo.destination.x == S.coordinates.x && gameinfo.destination.y == S.coordinates.y 
                            ?  // if current node == destination distinguish it as a destination
                                <>  <img src={S.image} width='5%'/>   </> // invader emoji
                            :// else
                                S.visited == true 
                            ?  // if current node == has been visited by the player , dont render it
                                <b></b> 
                            : // else  render 
                            <img src='Rectangular-Block-Wall-1.jpg' width='5%'/>
                            }
                            </div>     )})}
            <ImageListItemBar
              title={M.creator}
              classes={{
                root: classes.titleBar,
                title: classes.title,
                      }} />
              actionIcon={
                <IconButton aria-label={`star ${M.creator}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
                      } 
                      </div>
          </ImageListItem>
                              )})}
       
      </ImageList>
       </div>     
   
  );

}
export default MapSelectionModal;