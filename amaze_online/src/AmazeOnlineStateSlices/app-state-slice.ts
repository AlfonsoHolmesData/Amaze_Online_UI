import { createSlice } from "@reduxjs/toolkit";
import { User } from "../AmazeOnlineModels/user";
import { RootState } from "../store/store";




interface state  {
    app_title_color : string,
    app_title_text : string,
    app_state: number

}

const initialState = {
    app_title_color : 'orange',
    app_title_text : 'A m a z e O n l i n e',
    app_state: 0
}

export const  appSlice = createSlice({
   name: 'app',
   initialState,
   reducers: {
     changeToGameDisplay: (state)=>{
         state.app_state = 2;
         state.app_title_color = 'blue';
     },
    changeToHomeDisplay: (state)=>{
        state.app_state = 0;
        state.app_title_color = 'orange';
    }, 
    changeToPReGameDisplay: (state)=>{
        state.app_state = 1;
        state.app_title_color = 'blue';
    },



   }


})

export const  {
 changeToGameDisplay , changeToPReGameDisplay , changeToHomeDisplay
} = appSlice.actions;

 export const appState = (state : RootState) => state.app;

 export default appSlice.reducer;