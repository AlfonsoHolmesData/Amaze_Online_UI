import { GetUserRecords } from "../AmazeOnlineRemoteClient/User-service";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useState } from "react";
import { User } from "../AmazeOnlineModels/user";
import { Button } from "@material-ui/core";
import { UserDTO } from "../AmazeOnlineModels/user-dto";


function LeaderBoardModal (props : any) {

    const [users , SetUsers] = useState([] as UserDTO[]);
    const [isloading , setIsLoading] = useState(false);

    const useStyles = makeStyles((theme) => ({
        root: {
          position: 'relative',
          background: 'white',
          boxShadow: 'black 20px 10px 50px',
          fontFamily: 'Poiret One',
          alignContent : 'center',
          textAlign : 'center',
          width : '800px',
          height : '500px',
          margin:'50px auto'
        },
        modal_template: {
            boarder: 'solid 2em blue',
            position: 'relative',
            background: 'white',
            boxShadow: 'black 20px 10px 50px',
            fontFamily: 'Poiret One',
            alignContent : 'center',
            textAlign : 'center',
            width : '900px',
            height : '550px',
            margin:'50px auto'
          },
        player: {
            position : 'absolute',
            width : '5%',
            height : '5%',
            background:'blue'
          },  
        form_setting: {
          alignContent : 'center',
          width:'45%',
          textAlign : 'center',
          margin:'2em'
        },  
        button_for_Home: {
          background: 'blue',
          fontFamily: 'Poiret One',
          color:'white',
          margin: '.5em'
        },
        display_span : {
         color:'blue'
       },
       table_cell: {
        background: 'blue',
        textAlign : 'center',
        fontFamily: 'Poiret One',
        opacity : '100%',
        color:'white '
      },
      table_rowd: {
        background: '#DBDFE7',
        textAlign : 'center',
        fontFamily: 'Poiret One',
        opacity : '98%',
        color:'grey '
      },
        display_span1 : {
         color:'blue'
       }
      }));
      const classes = useStyles();

        const getUsers = async () => {


                function compare(a : UserDTO, b : UserDTO){
                    return b.wins - a.wins;
                    }

            try{
                 setIsLoading(true);
                let userArry : User[] = await GetUserRecords();
                userArry.sort(compare);
                 SetUsers(userArry);
                 setIsLoading(false);
            }catch(err: any){

                let userArry : UserDTO[] = [
                    {username: 'A' , password: '56434' ,  games_as_navigator : 34 , games_as_runner : 6789 , wins : 6000 } ,
                    {username: 'B' , password: '54764' ,  games_as_navigator : 23 , games_as_runner : 689 , wins : 700 } ,
                    {username: 'C' , password: 'gew53' ,  games_as_navigator : 645 , games_as_runner : 68 , wins : 5 } ,
                    {username: 'D' , password: 't3t3wt3' ,  games_as_navigator : 34564 , games_as_runner : 6897 , wins : 5 } ,
                    {username: 'E' , password: '33353r' ,  games_as_navigator : 36543 , games_as_runner : 6789 , wins : 5668 } ,
                    {username: 'F' , password: 'wwyt5t4' ,  games_as_navigator : 78897 , games_as_runner : 6789 , wins : 5 } ,
                    {username: 'G' , password: 'tw3t636' , games_as_navigator : 789 , games_as_runner : 9 , wins : 801 } ,
                    {username: 'H' , password: 'wt34te' ,  games_as_navigator : 789 , games_as_runner : 6 , wins : 5} ,
                    {username: 'I' , password: '3tw3t4' ,  games_as_navigator : 3345 , games_as_runner : 45635 , wins : 3456 } ,
                    {username: 'J' , password: '3tw3t4' ,  games_as_navigator : 34563 , games_as_runner : 34653 , wins : 434 } ,
                    {username: 'K' , password: '3tw3t4' ,  games_as_navigator : 78345639 , games_as_runner : 45644336 , wins : 453456 } ,
                    {username: 'L' , password: '3tw3t4' ,  games_as_navigator : 784459 , games_as_runner : 56 , wins : 66544 } ,
                    {username: 'M' , password: '3tw3t4' ,  games_as_navigator : 44 , games_as_runner : 56 , wins : 75 } ,
                    {username: 'Z' , password: '3tw3t4' ,  games_as_navigator : 2088665 , games_as_runner : 788 , wins : 2000665 } 
                ]

                userArry.sort(compare);
                    SetUsers(userArry);
                
                  
            }
        }
    return(
        <>
        
        { users.length == 0
            ?
               <div  className={classes.modal_template}> 
                   <Button variant="contained"  href="#contained-buttons" className={classes.button_for_Home} onClick={getUsers}> {isloading ? <img src='loading.gif' width='40'/>  :<b>Load LeaderBoard</b>}  </Button>
               </div>
            :
        <>
         
        <TableContainer className={classes.modal_template}>
            <h1>L E A D E R  B A O R D</h1>
            <Table  >
              <TableHead>
                <TableRow className={classes.table_cell}>
                  <TableCell className={classes.table_cell}>Username</TableCell>
                  <TableCell className={classes.table_cell}>GAN</TableCell>
                  <TableCell className={classes.table_cell} >GAR</TableCell>
                  <TableCell className={classes.table_cell}>Wins</TableCell>
                  <TableCell className={classes.table_cell}>Win %</TableCell>
                  <TableCell className={classes.table_cell}>TGP</TableCell>
                  <TableCell className={classes.table_cell}>Rank</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((U : UserDTO , index ) => (
                  <TableRow key={index}  >
                    <TableCell className={classes.table_rowd} >
                      {U.username}
                    </TableCell>
                    <TableCell className={classes.table_rowd}>{U.games_as_navigator}</TableCell>
                    <TableCell className={classes.table_rowd}>{U.games_as_runner}</TableCell>
                    <TableCell className={classes.table_rowd}>{U.wins}</TableCell>
                    <TableCell className={classes.table_rowd}>{U.wins > 0 ? <> {(U.wins/(U.games_as_navigator + U.games_as_runner) * 100).toFixed(2) }% </>: <i>???</i> }</TableCell>
                    <TableCell className={classes.table_rowd}>{U.games_as_navigator + U.games_as_runner}</TableCell>
                    <TableCell className={classes.table_rowd}>
                        {U.wins/(U.games_as_navigator + U.games_as_runner) > 0.88 ? <><img src='award.png' width='10'/> </> : <> Rookie </>}
                  </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            <Button variant="contained"  href="#contained-buttons" className={classes.button_for_Home} onClick={getUsers}> <b>Refreash</b>  </Button>
          </TableContainer>
        </>
            
        }


       </>
        
    );


};

export default LeaderBoardModal;