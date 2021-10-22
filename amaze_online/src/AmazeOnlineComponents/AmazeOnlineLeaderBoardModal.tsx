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


function LeaderBoardModal (props : any) {

    const [users , SetUsers] = useState([] as User[]);

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
            width : '700px',
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
          color:'white',
          margin: '.5em'
        },
        display_span : {
         color:'blue'
       },
        display_span1 : {
         color:'blue'
       }
      }));
      const classes = useStyles();

        const getUsers = async () => {
            try{
                
                let userArry : User[] = await GetUserRecords();
                 SetUsers(userArry);
            }catch(err: any){
    
            }
        }
    return(
        <>
        
        { users.length == 0
            ?
               <div  className={classes.modal_template}> 
                   <Button variant="contained"  href="#contained-buttons" className={classes.button_for_Home} onClick={getUsers}> <b>Load LeaderBoard</b>  </Button>
               </div>
            :
        
            <TableContainer className={classes.modal_template}>
            <Table  aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>Username</TableCell>
                  <TableCell align="right">Games as navigator</TableCell>
                  <TableCell align="right">Games as runner</TableCell>
                  <TableCell align="right">Wins</TableCell>
                  <TableCell align="right">Win %</TableCell>
                  <TableCell align="right">Total games played</TableCell>
                  <TableCell align="right">Rank</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((U : User , index ) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {U.username}
                    </TableCell>
                    <TableCell align="right">{U.games_as_navigator}</TableCell>
                    <TableCell align="right">{U.games_as_runner}</TableCell>
                    <TableCell align="right">{U.wins}</TableCell>
                    <TableCell align="right">{U.wins / U.total_games_played}</TableCell>
                    <TableCell align="right">{U.total_games_played}</TableCell>
                    <TableCell align="right">
                        { U.rank == 'Elite' ? <><img src='award.png' width='10'/> </> : <> Rookie </>}
                  </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            <Button variant="contained"  href="#contained-buttons" className={classes.button_for_Home} onClick={getUsers}> <b>Refreash</b>  </Button>
          </TableContainer>
        }


       </>
        
    );


};

export default LeaderBoardModal;