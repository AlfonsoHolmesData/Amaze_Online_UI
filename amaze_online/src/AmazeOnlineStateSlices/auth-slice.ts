import { createSlice } from "@reduxjs/toolkit";
import { User } from "../AmazeOnlineModels/user";
import { RootState } from "../store/store";



interface state  {
   user:  User
}

const initialState = {
    user: {username: 'fonsolo' , password: 'waba' , rank: 'Elite' , games_as_navigator : 100 , games_as_runner : 300 , wins : 379 , win_percentage : 89 , total_games_played : 400} as User
}
export const authSlice = createSlice({

  //name the slice
    name : "auth",
  //include initial state
     initialState,
  //create reducers
     reducers : {
       login: (state) =>  {
           state.user = {username: 'fonsolo' , password: 'waba' , rank: 'Elite' , games_as_navigator : 100 , games_as_runner : 300 , wins : 379 , win_percentage : 89 , total_games_played : 400} as User;
       },
       logout: (state) =>  {
        state.user = {username: '' , password: '' , rank: '' , games_as_navigator : 0 , games_as_runner : 0 , wins : 0 , win_percentage : 0 , total_games_played : 0} as User;
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