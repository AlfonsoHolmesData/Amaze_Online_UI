import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { Position } from "../AmazeOnlineModels/position";
import { Sticker } from "../AmazeOnlineModels/grid-sticker";
import { StickerDTO } from "../AmazeOnlineModels/grid-sticker-DTO";
import { UnpackedSticker } from "../AmazeOnlineModels/grid-sticker-requst-model";
import { UploadMapDTO } from "../AmazeOnlineModels/custom-game-map-request-model";


export interface Player {
    id:               string,
    username:         string,
    points:           number,
    is_navigator:     boolean,
    instruction:      string,
    current_position: Position,
    afk:              boolean
}




interface State {
 game_maps: UploadMapDTO[]

}

const initialState: State = {
    game_maps: []

};

// Create the actual slice
export const createGameSlice = createSlice({
    // Name the slice
    name: 'creategame',

    // Pass in the initial state
    initialState,

    // Define the reducers/actions to be called by the dispatcher within the components
    reducers: {
        // Define action names here: pass in the state, define how the state is manipulated within the reducer
        
        // Used when establishing a new game
        setGameMapCache: (state, action) => {
            // state = action.payload;
            state.game_maps = [];
           state.game_maps = action.payload;
        }
        
        }
});

// Export the actions/reducers to be imported into a component and dispatched from component
export const {
    setGameMapCache

} = createGameSlice.actions;

// Export the state of the entire slice to be referenced in the components
export const gameState = (state: RootState) => state.creategame;

// Export the entire slice to be included in the configureStore inside of store.ts
export default createGameSlice.reducer;