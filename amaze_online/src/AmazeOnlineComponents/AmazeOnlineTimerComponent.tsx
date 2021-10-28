import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { appState } from '../AmazeOnlineStateSlices/app-state-slice';
import { useTimer } from 'react-timer-hook';
import renderTime from './TimerHookUitil';

interface RemainingTime {
  remainingTime: number
}
interface ITimerProps{
  start: number;
  SetCurrentTime: ((secVal : number)=> void);
  onTimeout: (() => void);
}
 function Timer (props : ITimerProps) {
   const {isRunning , start , stop , seconds} = renderTime(props.start);

    const app_state = useSelector(appState);
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
      labels: {
        textAlign : 'center',
        color:'#DBDFE7',
        fontFamily: 'Poiret One'
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
    useEffect(()=>{
      start();
     
    }, [])
      return(
        <>
        { seconds > 0 ? <h1 className={classes.labels}  >Timer : {seconds}</h1> : <h1 className={classes.labels}  >Timer : 0</h1> }
        
        </>

      );

  };

export default Timer;


