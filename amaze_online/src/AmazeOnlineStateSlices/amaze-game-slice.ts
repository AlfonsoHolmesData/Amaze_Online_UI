import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { Position } from "../AmazeOnlineModels/position";
import { Sticker } from "../AmazeOnlineModels/grid-sticker";


export interface Player {
    id: string,
    username: string,
    points: number,
    is_navigator: boolean,
    instruction: string,
    current_position: Position,
    afk: boolean
}




interface State {
    id: string,
    has_navigator: boolean,
	has_runner: boolean,
	game_set: boolean,
	is_active: boolean,
	destination: Position,
	start_position: Position,
	runner_psotion: Position,
	game_map: Sticker[],
	current_instruction: string,
	match_time: number
}

const initialState: State = {
    id: '',
    has_navigator: false,
	has_runner: false,
	game_set: false,
	is_active: false,
	destination: {x: 0, y: 0 } as Position,
	start_position: {x: 0, y: 0 } as Position,
	runner_psotion: {x: 0, y: 0 } as Position,
	game_map: [] as Sticker[],
	current_instruction: '',
	match_time: 60
};

// Create the actual slice
export const gameSlice = createSlice({
    // Name the slice
    name: 'game',

    // Pass in the initial state
    initialState,

    // Define the reducers/actions to be called by the dispatcher within the components
    reducers: {
        // Define action names here: pass in the state, define how the state is manipulated within the reducer
        
        // Used when establishing a new game
        setGame: (state, action) => {
            // state = action.payload;
            state.id = action.payload.id;
            state.has_navigator = action.payload.has_navigator;
            state.has_runner = action.payload.has_runner;
            state.game_set = action.payload.game_set;
            state.is_active = action.payload.is_active;
            state.destination = action.payload.destination;
            state.start_position = action.payload.start_position;
            state.runner_psotion = action.payload.runner_psotion;
            state.game_map = action.payload.game_map;
            state.current_instruction = action.payload.current_instruction;
            state.match_time = action.payload.match_time;
            console.log('Setting ', state, ' to ', action.payload)
        },
        countDown: (state) => {
            // state = action.payload;
            if(state.match_time > 0)
            state.match_time -= 1;
            
        },
        appendStickerToGameMap: (state , action : PayloadAction<Sticker>) => {
            if(state.game_map.length < 19 * 19)
            state.game_map.push(action.payload);
            
        },
        removeStickerFromGameMap: (state , action : PayloadAction<Sticker>) => {
            if(state.game_map.length < 19 * 19)
            state.game_map.push(action.payload);
            
        },
        replaceStickerOnMap: (state , action : PayloadAction<Sticker>) => {
            if(state.game_map.length < 19 * 19)
            state.game_map.push(action.payload);
            
        },
        // Used when resetting the state
        resetGame: (state) => {
            state.id = '';
            state.has_navigator = false;
            state.has_runner = false;
            state.game_set = false;
            state.is_active = false;
            state.destination = {x: 0, y: 0 } as Position;
            state.start_position = {x: 0, y: 0 } as Position;
            state.runner_psotion = {x: 0, y: 0 } as Position;
            state.game_map = [];
            state.current_instruction = '';
            state. match_time = 60;
        
        }
    }
});

// Export the actions/reducers to be imported into a component and dispatched from component
export const {
    setGame,
    resetGame,
    countDown
} = gameSlice.actions;

// Export the state of the entire slice to be referenced in the components
export const gameState = (state: RootState) => state.game;

// Export the entire slice to be included in the configureStore inside of store.ts
export default gameSlice.reducer;