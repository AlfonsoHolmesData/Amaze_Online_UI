import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

 function BackGroundDisply (props : any) {
    
    
    const useStyles = makeStyles((theme) => ({
      root: {
        textAlign : 'center',
        color:'#DBDFE7',
        fontFamily: 'Poiret One',
        fontSize:'3em',
     
      },
      welcome_page: {
        alignContent : 'center',
        textAlign : 'center'
      },  
      button_for_Home: {
        
        margin: '.1em'
      },
         display_span : {
          color:'orange'
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