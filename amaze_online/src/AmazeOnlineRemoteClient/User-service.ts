import { User } from "../AmazeOnlineModels/user";
import { AmazeClient } from "./AmazeOnlineClient"

export const GetUserRecords = async () =>{
 let  response = await  AmazeClient.get('/users');

    if(response.status == 400 || response.status == 500 )
    {
        throw response;
    }

    console.log( "RESPONSOE FROM GET USERS METHOD :", response);
     let users : User[]  = response.data;

     return users;


}