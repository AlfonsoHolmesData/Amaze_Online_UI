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
        
        // Used used to move player right by specified step
        moveRight: (state , action :PayloadAction<number>) => {
            // state = action.payload;
            state.head = state.bodyTranslate[state.bodyTranslate.length - 1];
            state.head = {x : state.bodyTranslate[state.bodyTranslate.length - 1].x  + action.payload ,  y : state.bodyTranslate[state.bodyTranslate.length - 1].y } as Position;
            state.player.current_position = state.head;
            state.bodyTranslate.push(state.head);
            state.bodyTranslate.shift();

            
        },
        // Used used to move player left by specified step
        moveLeft: (state , action :PayloadAction<number>) => {
            // state = action.payload;
            state.head = state.bodyTranslate[state.bodyTranslate.length - 1];
            state.head = {x : state.bodyTranslate[state.bodyTranslate.length - 1].x  - action.payload ,  y : state.bodyTranslate[state.bodyTranslate.length - 1].y } as Position;
            state.player.current_position = state.head;
            state.bodyTranslate.push(state.head);
            state.bodyTranslate.shift();

            
        },
        // Used used to move player  up by specified step
        moveUp: (state,  action :PayloadAction<number>) => {
            // state = action.payload;
            state.head = state.bodyTranslate[state.bodyTranslate.length - 1];
            state.head = {x : state.bodyTranslate[state.bodyTranslate.length - 1].x ,  y : state.bodyTranslate[state.bodyTranslate.length - 1].y  + action.payload  } as Position;
            state.bodyTranslate.push(state.head);
            state.bodyTranslate.shift();
        }, 
        // Used used to move down player by specified step 
        moveDown: (state,  action :PayloadAction<number>) => {
            // state = action.payload;
            state.head = state.bodyTranslate[state.bodyTranslate.length - 1];
            state.head = {x : state.bodyTranslate[state.bodyTranslate.length - 1].x ,  y : state.bodyTranslate[state.bodyTranslate.length - 1].y  - action.payload } as Position;
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
    moveRight , moveLeft , moveDown , moveUp , teleprtTo
} = playerSlice.actions;

// Export the state of the entire slice to be referenced in the components
export const playerState = (state: RootState) => state.player;

// Export the entire slice to be included in the configureStore inside of store.ts
export default playerSlice.reducer;