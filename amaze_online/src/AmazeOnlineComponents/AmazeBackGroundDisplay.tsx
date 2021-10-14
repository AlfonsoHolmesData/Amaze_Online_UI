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
        }
    }));
    
    const classes = useStyles();

    return(
      <>
        <div className={classes.root}>
            <h1>Amaze <span className={classes.display_span} >O</span>nline</h1>
        </div> 
      </>
    );
};

export default BackGroundDisply;