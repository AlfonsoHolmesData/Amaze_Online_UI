import { createSlice } from "@reduxjs/toolkit";
import { User } from "../AmazeOnlineModels/user";
import { RootState } from "../store/store";



interface state  {
   current_ime:  number
}

const initialState = {
   current_ime:  0
}
export const timeSlice = createSlice({

  //name the slice
    name : "time",
  //include initial state
     initialState,
  //create reducers
     reducers : {
       getCurrentTime: (state) =>  {
           state.current_ime = 0;
       },
       setCurrentTime: (state , action) =>  {
         state.current_ime = action.payload;
     },


     }

})

// Export the actions/reducers to be imported into a component and dispatched from component
export const {
   setCurrentTime,
   getCurrentTime
} = timeSlice.actions;

// Export the state of the entire slice to be referenced in the components
export const timeState = (state: RootState) => state.time;

// Export the entire slice to be included in the configureStore inside of store.ts
export default timeSlice.reducer;