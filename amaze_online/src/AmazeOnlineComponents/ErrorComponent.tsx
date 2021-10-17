import { Snackbar } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
 
 
 interface IAtertProps{
     message : string;
     duration : number;
     isOpen : boolean;
     SetStatusOnClose: (nextVal : boolean) => void ;
 }
 
 function ErrorAlert (props : IAtertProps )  {
   
    let resetAlertStatus = () =>
    {
        props.SetStatusOnClose(false);
    }

   return ( 

    <>
    
        <Snackbar open={props.isOpen} autoHideDuration={props.duration} onClose={resetAlertStatus} >
        <Alert  severity="error">
            {props.message}
        </Alert>
        </Snackbar>
    </>

   );





 };

 export default ErrorAlert;