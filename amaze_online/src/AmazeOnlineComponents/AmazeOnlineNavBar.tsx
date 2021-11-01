import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { appState, changeToPReGameDisplay } from '../AmazeOnlineStateSlices/app-state-slice';
import { AppBar, Box, Container, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import App from '../App';
import { gameState } from '../AmazeOnlineStateSlices/amaze-game-slice';
import VpnKeySharpIcon from '@material-ui/icons/VpnKeySharp';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import FingerprintOutlinedIcon from '@material-ui/icons/FingerprintOutlined';
import DetailsRoundedIcon from '@material-ui/icons/DetailsRounded';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import { useStopwatch } from 'react-timer-hook';
import { useHistory } from 'react-router';

function NavigationBar (props : any) {
    const history = useHistory();
    const app_state = useSelector(appState);
    const gameinfo = useSelector(gameState);
    const [isAuth , setISAuth] = useState(true)
    const dispatch = useDispatch();

    const switch_to_game = (e:any) => {
      dispatch(changeToPReGameDisplay);
        history.push('/creategame');
    }

    const switch_to_Register = (e:any) => {
        dispatch(changeToPReGameDisplay);
          history.push('/login');
      }

      const switch_to_home = (e:any) => {
        dispatch(changeToPReGameDisplay);
          history.push('/dashboard');
      }
    
    const useStyles = makeStyles((theme) => ({
      root: {
        textAlign : 'center',
        color:'#DBDFE7',
        fontFamily: 'Poiret One',
        fontSize:'2em'
     
      },
      sideBar: {
          background:'white',
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
                <Divider />
                    <List>

                        { isAuth ?
                        <>
                        
                        <ListItem button onClick={(e) => {switch_to_home(e)}}>
                                <ListItemIcon>
                                    <DetailsRoundedIcon/>
                                </ListItemIcon >
                                <ListItemText primary="Home" />
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon>
                                    <ExitToAppOutlinedIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Logout" />
                            </ListItem>

                            
                        </>
                        :
                        <>
                            
                        <ListItem button>
                            <ListItemIcon>
                                <FingerprintOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Login" />
                        </ListItem>

                        <ListItem button onClick={(e) => {switch_to_Register(e)}}>
                            <ListItemIcon>
                                <PersonAddOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Register" />
                        </ListItem>
                            
                            
                        </>


                       
                        }
                        <ListItem button onClick={(e) => {switch_to_game(e)}}>
                            <ListItemIcon >
                                <SportsEsportsOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Amaze Online" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <HelpOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="How To Play" />
                        </ListItem>
                     
                    </List>

          
                 <footer style={{ position : 'relative', top: '40%'  }}>
                    <Divider />
                    <IconButton style={{  color:'black'  }}>
                        <HelpOutlinedIcon/>
                    </IconButton>
                    

                 </footer>
            
            </AppBar>

            
            :


            <></>
           
        }
        </>
    );

};

export default NavigationBar;