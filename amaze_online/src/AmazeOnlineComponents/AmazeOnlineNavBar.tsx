import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { appState } from '../AmazeOnlineStateSlices/app-state-slice';
import { AppBar, Box, Container, Drawer, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import App from '../App';
import { gameState } from '../AmazeOnlineStateSlices/amaze-game-slice';

function NavigationBar (props : any) {
    const app_state = useSelector(appState);
    const gameinfo = useSelector(gameState);

    const useStyles = makeStyles((theme) => ({
      root: {
        textAlign : 'center',
        color:'#DBDFE7',
        fontFamily: 'Poiret One',
        fontSize:'2em'
     
      },
      sideBar: {
          background:'blue',
          width: '20%',
          height: '100%',
          zIndex: 1, 
          left: '0%',
          color: 'black'
          
      },
      toolBar: {
        background:'blue',
        Top:'10%',
        width: '22%',
        hieght: '900px',
      
    },
      welcome_page: {
        alignContent : 'center',
        textAlign : 'center'
      },  
      button_for_Home: {
        
        margin: '.1em'
      },
         display_span : {
           //dynamically changes with screen
          color: `${app_state.app_title_color}`
        },
         display_span1 : {
          color:'blue'
        }
    }));
    
    const classes = useStyles();

    return(
        <>
        {

            gameinfo.game_state !== 1 
            
            ? 

            <AppBar  className={classes.sideBar}>
                <Toolbar className={classes.root}>
                <IconButton color='inherit' >
                <MenuIcon />
            </IconButton> <h6>A m a z e  <span className={classes.display_span} >O</span> n l i n e</h6>  
                </Toolbar>
            
            </AppBar>

            
            :


            <></>
           
        }
        </>
    );

};

export default NavigationBar;