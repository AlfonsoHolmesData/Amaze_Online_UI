import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { RunTimePlayer } from "../AmazeOnlineAPI/API";
import { Position } from "../AmazeOnlineModels/position";
import { RunTimePlayerModelDTO } from "../AmazeOnlineModels/run-time-player-DTO";
import { Player } from "./amaze-game-slice";






interface State {
 player: RunTimePlayerModelDTO,
 bodyTranslate :  Position[],
 head: Position
}

const initialState: State = {
    player : { username: '', points: 0, is_navigator: false, instruction: 'Left', current_position: {x: 0 , y: 0} as Position, afk: false} as RunTimePlayerModelDTO,
    bodyTranslate : [] = [{x : 0 ,  y : 0 }] as Position[],
    head: {x : 0 ,  y : 0 } as Position
}

// Create the actual slice
export const playerSlice = createSlice({
    // Name the slice
    name: 'player',

    // Pass in the initial state
    initialState,

    // Define the reducers/actions to be called by the dispatcher within the components
    reducers: {
        // Define action names here: pass in the state, define how the state is manipulated within the reducer
        
        // Used when establishing a new game
        moveHozizontal: (state) => {
            // state = action.payload;
            state.head = state.bodyTranslate[state.bodyTranslate.length - 1];
            state.head = {x : state.bodyTranslate[state.bodyTranslate.length - 1].x  + 1 ,  y : state.bodyTranslate[state.bodyTranslate.length - 1].y } as Position;
            state.player.current_position = state.head;
            state.bodyTranslate.push(state.head);
            state.bodyTranslate.shift();

            
        },
        moveVertical: (state, action) => {
            // state = action.payload;
            state.head = state.bodyTranslate[state.bodyTranslate.length - 1];
            state.head = {x : state.bodyTranslate[state.bodyTranslate.length - 1].x ,  y : state.bodyTranslate[state.bodyTranslate.length - 1].y + 1  } as Position;
            state.bodyTranslate.push(state.head);
            state.bodyTranslate.shift();
        }, 

      

        // Used when resetting the state
        teleprtTo: (state , action) => {
            state.player.current_position = {x: action.payload.x , y: action.payload.y} as Position;
        
        }
    }
});

// Export the actions/reducers to be imported into a component and dispatched from component
export const {
    moveHozizontal,
    moveVertical
} = playerSlice.actions;

// Export the state of the entire slice to be referenced in the components
export const playerState = (state: RootState) => state.player;

// Export the entire slice to be included in the configureStore inside of store.ts
export default playerSlice.reducer;