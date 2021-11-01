import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTime, timeState } from "../AmazeOnlineStateSlices/global-time-slice";

const useTime = (totalDuration: number) => {
    const [seconds , SetSeconds] = useState(totalDuration) ;
    const [isRunning , setIsRunning] = useState(false);
    const global_time = useSelector(timeState);
    const dispatch = useDispatch();

    let timerid : any= useRef(null) ;

        const start = useCallback (() => {
         timerid =  setInterval(() => {
            SetSeconds((state) => state - 1);
           

          }, 1000);
          setIsRunning(true);
        }, [setIsRunning , SetSeconds]);

        const stop  = useCallback (() => {
            clearInterval(timerid.current);
            setIsRunning(false);
        } , [setIsRunning , SetSeconds]);


        useEffect(() =>  { 
          dispatch(setCurrentTime(seconds));
            if(seconds < 1){
                stop();
            }
        } , [seconds , stop]);
        
      return {
        isRunning,
        start,
        stop,
        seconds
      }
    }

    export default useTime;