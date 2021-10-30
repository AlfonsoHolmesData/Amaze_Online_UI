import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { appState } from '../AmazeOnlineStateSlices/app-state-slice';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import clsx from 'clsx';
import { AppBar, Box, Container, Drawer, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { executeReducerBuilderCallback } from '@reduxjs/toolkit/dist/mapBuilders';


 function BackGroundDisply (props : any) {
    
    const app_state = useSelector(appState);
    const useStyles = makeStyles((theme) => ({
      root: {
        textAlign : 'center',
        color:'#DBDFE7',
        fontFamily: 'Poiret One',
        fontSize:'3em',
     
      },
      sideBar: {
          background:'blue',
          width: '22%',
          Top:'59%',
          color: 'black',
          hieght: '100%'
      },
      toolBar: {
        background:'blue',
        Top:'10%',
        width: '22%',
        hieght: '900px',
        marginLeft: '0%',
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
    
       
         
          <div className={classes.root}>
         
       <h1>A m a z e  <span className={classes.display_span} >O</span> n l i n e</h1>  
               
            
          </div> 
      </>
    );
};

export default BackGroundDisply;


