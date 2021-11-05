import { BottomNavigation, BottomNavigationAction, Button, CircularProgress, IconButton, TextField } from "@material-ui/core";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded';
import WrongLocationRoundedIcon from '@mui/icons-material/WrongLocationRounded';
import LayersClearRoundedIcon from '@mui/icons-material/LayersClearRounded';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import FormatPaintIcon from '@material-ui/icons/FormatPaint';
import DetailsRoundedIcon from '@material-ui/icons/DetailsRounded';
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Sticker } from "../AmazeOnlineModels/grid-sticker";
import { StickerDTO } from "../AmazeOnlineModels/grid-sticker-DTO";
import { Position } from "../AmazeOnlineModels/position";
import { appendStickerToGameMap, gameState, generateRandomizedMap, replaceStickerOnMap, setDestination, setRandomDestination } from "../AmazeOnlineStateSlices/amaze-game-slice";
import {  playerSlice, playerState } from "../AmazeOnlineStateSlices/amaze-player-slice"
import { anointSelectedStickers, clearMap, clearSelected, createMapState, eraseMap, fillMap, renderMap, selectSticker } from "../AmazeOnlineStateSlices/create-gamemap-slice";
import { FlaggedSticker } from "../AmazeOnlineModels/grid-sticker-checked";
import { UnpackedSticker } from "../AmazeOnlineModels/grid-sticker-requst-model";
import { UploadMap } from "../AmazeOnlineRemoteClient/User-service";
import { UploadMapDTO } from "../AmazeOnlineModels/custom-game-map-request-model";
import { ThemeContext } from "@mui/styled-engine";

function DashBoardComponent (props : any)  {
    const [screen , setScreen] = useState('');
    const [done , setDone] = useState(false);
    const [isLoading , setIsLoading] = useState(false);
    const [mapName , setMapName] = useState('');

    const gameinfo = useSelector(gameState);
    const create = useSelector(createMapState);
    const dispatch = useDispatch();
    let mapRoute : any  = "create map";
    let statRoute : any  = "veiw stats";
    let defaultRoute : any  = "default";
    let questionmark_gif : any  = "question-mark.gif";
  
   

    const useStyles = makeStyles((theme) => ({
        root: {
          position: 'relative',
          background: 'white',
          color: '#DBDFE7',
          boxShadow: 'black 20px 10px 50px',
          fontFamily: 'Poiret One',
          alignContent : 'center',
          textAlign : 'center',
          width : '500px',
          height : '500px',
          margin:'50px auto'
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
        display_span : {
         color:'blue'
       },
        display_span1 : {
         color:'blue'
       }
      }));
      const classes = useStyles();


    const selectBlock = (e : any , key : number ) => { dispatch(selectSticker(key)); }
    const anoint = () => { dispatch(anointSelectedStickers()); }
    const clearPath = () => { dispatch(clearSelected()); }
    const clearBoard = () => { dispatch(clearMap()); }
    const resetBoard = () => { dispatch(renderMap()); }
    const generateBoard = () => { dispatch(fillMap()); }


    const finish = () => { 
      setDone(true);
     }

     const  UplaodCustomeMap = async  () => {
       let mapToSave : UnpackedSticker[] = [];

       // unpack sticker for save
       
       create.game_map.forEach((e : FlaggedSticker , i) => {
         mapToSave.push({ x : e.coordinates.x ,
                          y : e.coordinates.y ,
                          image : e.img , 
                          width_percentage : e.width_percentage ,
                          height_percentage : e.hieght_percentage ,
                          position_type : 'absolute'  ,
                          visited : e.visited
       } as UnpackedSticker);
       })

       setIsLoading(true);
       try{

         let savedMap : UploadMapDTO | undefined = await UploadMap( {id : '' , name : mapName , creator : 'Fansolo' ,  blueprint : mapToSave as []} );  
         console.log(savedMap);

          dispatch(eraseMap());

       }catch(e : any){
          console.log(e);
       }
       
       setIsLoading(false);
       setDone(false);
     }

     function render (){
       
     
      switch (screen) {
        case "create map":
          return(
            <>
            { create.game_map.length == 0 ? <IconButton onClick={generateBoard} ><FlashOnRoundedIcon  style={{  position : 'absolute', color : 'blue' , top : '-100%' , left: '0%'}}/></IconButton>: <p style={{  position : 'absolute', color : 'grey' , top : '-100%' , left: '0%' }}>Generated</p>}
            <div  style={{ position : 'relative',   top : '-3%' , left: '60%'  }}>
                   { create.amount_selected > 0 ? <div style={{  color : 'red' }}><IconButton onClick={clearPath} ><DeleteRoundedIcon  style={{  color : 'red' }} /></IconButton> {create.amount_selected} </div> :<div style={{  color : 'grey' }}><IconButton  ><DeleteRoundedIcon   /></IconButton> {create.amount_selected} </div> }
            </div>

            <div  style={{ position : 'relative',   top : '-3%' , left: '60%'  }}>
                   { (create.amount_selected > 0 && create.amount_selected <= 3) && create.special_selected < create.max_amount_of_special_spaces ? <div style={{  color : 'blue' }}><IconButton onClick={anoint} ><FmdGoodRoundedIcon  style={{  color : 'blue' }} /></IconButton> {create.amount_selected} </div> :<div style={{  color : 'grey' }}><IconButton  ><WrongLocationRoundedIcon   /></IconButton> - </div> }
            </div>

            <div  style={{ position : 'relative',   top : '-3%' , left: '60%'  }}>
                   { !create.cleared ? <div style={{  color : '#EF8D22' }}><IconButton onClick={clearBoard} ><LayersClearRoundedIcon  style={{  color : '#EF8D22' }} /></IconButton> ! </div> : <div style={{  color : 'blue' }}><IconButton onClick={resetBoard} ><FlashOnRoundedIcon  style={{  color : 'blue' }} /></IconButton> + </div> }
            </div>

            <div  style={{ position : 'relative',   top : '-3%' , left: '59%'  }}>
                   { create.changes_made > 60 && create.special_selected == create.max_amount_of_special_spaces ? <div style={{  color : 'green' }}><IconButton onClick={finish}  ><CloudUploadIcon  style={{  color : 'green' }} /></IconButton></div> : <div style={{  color : 'blue' }}><IconButton ><CloudUploadIcon  style={{  color : 'grey' }} /></IconButton>  </div> }
            </div>
           
          {create.game_map.map((S : FlaggedSticker , index) =>{
            
            return( 
            
              <div key={index} style={{ position : 'absolute',  width :` ${S.width_percentage}%`, height : ` ${S.hieght_percentage}%`, top : S.coordinates.y , left: S.coordinates.x }} >
                
                 { S.visited == true 
                 ?  // if current node == has been visited by the player , dont render it
                    <b></b> 
                 : // else  render 
                 <>
                { S.selected == false  ? <img src={S.img} width='20' onClick={(e) => selectBlock(e , index)}  /> : <img src={S.img} width='15'  /> }
                 </>
                 }
              </div>
            )
          
          })
          }
          <div  style={{ position : 'relative',   top : '0%' , left: '0%' }}>
          { !done ? 
          <></> 
          :
          
           !isLoading  ? 
            <>
           <TextField color='primary' id="standard-basic" label="Standard" variant="filled" value={mapName} onChange={(e) => { setMapName(e.target.value); }} />
             <br/>
           <Button variant="contained" style={{  background: 'green' , fontFamily: 'Poiret One',  boxShadow: 'black 20px 10px 50px'}} onClick={UplaodCustomeMap}> <b>U p l o a d   M A P </b></Button> 
           </>
           :   
           <Button variant="contained" style={{  background: 'green' , fontFamily: 'Poiret One',  boxShadow: 'black 20px 10px 50px'}} > <img src='loading.gif' width='40' /></Button> }
           </div>
          </>
          );
        
          break;
          case "veiw stats":
            return(
              <div style={{fontFamily: 'Poiret One'}}>
                <h1>U s e r <span className={classes.display_span} >S t a t s</span></h1>  
              
                <br/><br/>
                <br/>
                  <p style={{textAlign : "center"}}>
                    <b>  win% <CircularProgress variant="determinate" value={34} /></b> <br/><br/>
                    <b>  winsv: <span className={classes.display_span} >600</span></b> <br/> 
                    <b>  total wins :  <span className={classes.display_span} >1200</span></b> <br/>
                    <b>  losses : 600 </b>  <br/>
                    <b>  total losses : 600</b>  
                  </p>
                  <img src='loading.gif' width='45' />
               </div> 
              );
            break;
        default:
          return(
            <div className={classes.root}>
         
            <h1>U s e r <span className={classes.display_span} >H o m e</span></h1>  
            <br/>
              <p>
                <b>Welcome  <span className={classes.display_span} >U s e r</span> ,
                this is the wonderfull and fun-filled Amaze Dashboard.
                Here you can view your stats, create new maps , and you can come back here any time to view this message , Happy Hunting!
                </b> 
              </p>
              <img src='loading.gif' width='45' />
               </div> 
            );
          break;
      }
     
    }

     
    return(
        <>   
         <BottomNavigation >
                <BottomNavigationAction label="Recents" icon={<DonutSmallIcon />} onClick={() => {setScreen("veiw stats"); }} />
                <BottomNavigationAction label="Favorites" icon={<DetailsRoundedIcon />} onClick={() => { setScreen('default');}} />
                <BottomNavigationAction label="Nearby" icon={<FormatPaintIcon />} onClick={() => { setScreen('create map');}}/>
              </BottomNavigation>
          <div   className={classes.root_canvas}>

              {render()}
            
           
          </div>  
       
        
        </>
    );
};

export default DashBoardComponent;


