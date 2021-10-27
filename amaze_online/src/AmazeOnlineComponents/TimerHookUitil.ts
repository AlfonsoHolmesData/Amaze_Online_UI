import { useCallback, useEffect, useRef, useState } from "react";

const useTime = (totalDuration: number) => {
    const [seconds , SetSeconds] = useState(totalDuration) ;
    const [isRunning , setIsRunning] = useState(false);


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