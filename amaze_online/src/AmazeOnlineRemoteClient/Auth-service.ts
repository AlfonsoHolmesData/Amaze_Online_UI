import {Auth} from 'aws-amplify';


export const Authenticate = async (credentials : {username : string , password : string}) => {

   
         let result = await Auth.signIn({
          username: credentials.username,
          password: credentials.password,
          });

    if(result == undefined){
        throw 'Unable to Authenticate';
    }
   


 }


 export const Register = async (newUser : {firstname : string , lastname : string , email : string ,username : string , password : string}) => {

   
    let result = await Auth.signUp(newUser);

if(result == undefined){
   throw 'Unable to Authenticate';
}



}