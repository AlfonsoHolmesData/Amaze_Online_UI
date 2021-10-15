import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

 function HomePage (props : any) {
    
    const history = useHistory();

    const switch_to_game = () => {
        history.push('/creategame');
    }

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
            <Button variant="contained"  className={classes.button_for_Home} > <b>A b <span className={classes.display_span} > O</span> u t</b>  </Button>
            <br/>
            <Button variant="contained"  href="#contained-buttons" className={classes.button_for_Home} onClick={switch_to_game} > <b>A m a z e  <span className={classes.display_span} >O</span> n l i n e</b>  </Button>
            <br/>
            <Button variant="contained"  href="#contained-buttons" className={classes.button_for_Home}> <b>H <span className={classes.display_span} >O</span> w T <span className={classes.display_span} >O</span> P l a y</b>  </Button>
        </div>
      </>
    );
};

export default HomePage;