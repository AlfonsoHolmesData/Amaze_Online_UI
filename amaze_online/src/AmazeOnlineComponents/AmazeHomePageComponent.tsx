import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

 function HomePage (props : any) {
    
    
    const useStyles = makeStyles((theme) => ({
      root: {
        background: 'orange',
        alignContent : 'center',
        textAlign : 'center',
        marginTop:'10%'
      },
      welcome_page: {
        alignContent : 'center',
        textAlign : 'center',
        marginTop:'50%'
      },  
      button_for_Home: {
        background: '#DBDFE7',
        color:'white',
        margin: '.5em'
      }
    }));
    
    const classes = useStyles();

    return(
      <>
        <div className={classes.root}>
            <Button variant="contained"  href="#contained-buttons" className={classes.button_for_Home}> About </Button>
            <br/>
            <Button variant="contained"  href="#contained-buttons" className={classes.button_for_Home}> Amaze Online </Button>
            <br/>
            <Button variant="contained"  href="#contained-buttons" className={classes.button_for_Home}> How To Play </Button>
        </div>
      </>
    );
};

export default HomePage;