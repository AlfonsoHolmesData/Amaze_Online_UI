import {Auth} from 'aws-amplify';
import { AxiosRequestConfig } from "axios";
import { UploadMapDTO } from "../AmazeOnlineModels/custom-game-map-request-model";
import { Sticker } from "../AmazeOnlineModels/grid-sticker";
import { UnpackedSticker } from "../AmazeOnlineModels/grid-sticker-requst-model";
import { User } from "../AmazeOnlineModels/user";
import { AmazeClient } from "./AmazeOnlineClient"

export const Authenticate = async (credentials : {username : string , password : string}) => {
   let respones;
   try{
       
      respones  = await Auth.signIn({
            username: credentials.username,
            password: credentials.password,
            });
            localStorage.setItem('api-token', respones.signInUserSession.idToken.jwtToken);

   }catch(err:any){
     
    console.log(err);             
   }

 }

 
export const AuthenticateDynamoDB = async (credentials : {username : string , password : string}) => {
    let respones;
    try{
        
       respones  = await AmazeClient.get(`/users?username=${credentials.username}&password=${credentials.password}`);
           
 
    }catch(err:any){
      
     console.log(err);             
    }
    let user : User = respones?.data; 
    return user;
 
  }

   

  

  
 export const RegisterDynamoDB = async (newUser : {firstname : string , lastname : string , email : string ,username : string , password : string}) => {

    let respones;
    try{
        respones  = await AmazeClient.post('/users' , newUser );
        
    }catch(err:any){
      
      console.log(err);      
   }
 }

 export const Register = async (newUser : {firstname : string , lastname : string , email : string ,username : string , password : string}) => {

    let respones;
    try{
        respones = await Auth.signUp({
            username: newUser.username,
            password: newUser.password,
            attributes: {
                email: newUser.email,
                name: newUser.firstname + ' ' + newUser.lastname
            }
        });
    }catch(err:any){
      
      console.log(err);      
   }



}