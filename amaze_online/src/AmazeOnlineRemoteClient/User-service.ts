import { AxiosRequestConfig } from "axios";
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

export const UploadMap = async (id : string , username : string ,  mapToSave : []) =>{

    console.log(id , username , mapToSave);
  
    let  response = await  AmazeClient.post('/maps' , {username , id , mapToSave});
    
     let errorProjectile = {
         status : response.status ,
                            body : {
                                id,
                                username,
                                mapToSave
                            } ,
                            message : '400 error has been thrown'
                                        }
       if(response.status >= 400 )
       {
        console.log( "RESPONSOE FROM UPLAOD MAP METHOD :", response , ' GAME MAP :' , mapToSave );
           throw errorProjectile;
       }
   
       console.log( "RESPONSOE FROM UPLAOD MAP METHOD :", response , ' GAME MAP :' , mapToSave );
        let map : UnpackedSticker[]  = response.data;
   
        return map;
   
   
   }