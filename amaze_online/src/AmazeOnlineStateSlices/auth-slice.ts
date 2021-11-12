import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../AmazeOnlineModels/user";
import { RootState } from "../store/store";



interface state  {
   user:  User
   isAuthenticated : boolean
}

const initialState = {
    user: {username: '' , password: '' , rank: '' , games_as_navigator : 0 , games_as_runner : 0 , wins : 0 , win_percentage : 0 , total_games_played : 0  ,firstname : '' , lastname : '' , email : '' } as User,
    isAuthenticated : false
}
export const authSlice = createSlice({

  //name the slice
    name : "auth",
  //include initial state
     initialState,
  //create reducers
     reducers : {
       login: (state , action : PayloadAction<User>) =>  {
           state.user =  action.payload 
           state.isAuthenticated = true;
       },
       logout: (state) =>  {
        state.user = {username: '' , password: '' , rank: '' , games_as_navigator : 0 , games_as_runner : 0 , wins : 0 , win_percentage : 0 , total_games_played : 0} as User;
        state.isAuthenticated = false;
       }


     }

})

// Export the actions/reducers to be imported into a component and dispatched from component
export const {
   login , logout 
} = authSlice.actions;

// Export the state of the entire slice to be referenced in the components
export const authState = (state: RootState) => state.auth;

// Export the entire slice to be included in the configureStore inside of store.ts
export default authSlice.reducer;