import { AxiosRequestConfig } from "axios";
import { UploadMapDTO } from "../AmazeOnlineModels/custom-game-map-request-model";
import { Sticker } from "../AmazeOnlineModels/grid-sticker";
import { UnpackedSticker } from "../AmazeOnlineModels/grid-sticker-requst-model";
import { User } from "../AmazeOnlineModels/user";
import { AmazeClient } from "./AmazeOnlineClient"

export const GetUserRecords = async () =>{
 let  response = await  AmazeClient.get('/users');

    if(response.status >= 400)
    {
        throw response;
    }

    console.log( "RESPONSOE FROM GET USERS METHOD :", response);
     let users : User[]  = response.data;

     return users;


}

export const UploadMap = async (gameMap : UploadMapDTO ) =>{

    console.log(gameMap);
  
    let  response = await  AmazeClient.post('/users/maps' ,  {
        id:  gameMap.id,
        creator: gameMap.creator,
        blueprint : gameMap.blueprint
     } );
    
     let errorProjectile = {
         status : response.status ,
                            body : {
                               id:  gameMap.id,
                               creator: gameMap.creator,
                               blueprint : gameMap.blueprint
                            } ,
                            message : '400 error has been thrown'
                                        }
       if(response.status >= 400 )
       {
        console.log( "RESPONSOE FROM UPLAOD MAP METHOD :", response , ' GAME MAP :' , gameMap );
           throw errorProjectile;
       }
   
       console.log( "RESPONSOE FROM UPLAOD MAP METHOD :", response , ' GAME MAP :' , gameMap );
        let map : UploadMapDTO  = response.data;
   
        return map;
   
   
   }