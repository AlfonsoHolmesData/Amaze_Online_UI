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

export const UploadMap = async (username : string ,  mapToSave : UnpackedSticker[]) =>{

    
    
    let  response = await  AmazeClient.post('/maps' , { 
         username,  
         mapToSave});

   
       if(response.status >= 400 )
       {
           throw response;
       }
   
       console.log( "RESPONSOE FROM UPLAOD MAP METHOD :", response);
        let map : UnpackedSticker[]  = response.data;
   
        return map;
   
   
   }