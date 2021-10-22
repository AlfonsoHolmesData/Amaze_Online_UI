import {Auth} from 'aws-amplify';


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