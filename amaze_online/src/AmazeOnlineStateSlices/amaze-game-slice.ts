import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { Position } from "../AmazeOnlineModels/position";
import { Sticker } from "../AmazeOnlineModels/grid-sticker";
import { StickerDTO } from "../AmazeOnlineModels/grid-sticker-DTO";
import { UnpackedSticker } from "../AmazeOnlineModels/grid-sticker-requst-model";


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
    id:                  string,
    host:                string,
    has_navigator:       boolean,
	has_runner:          boolean,
	game_set:            boolean,
	is_active:           boolean,
	destination:         Position,
	start_position:      Position,
	runner_psotion:      Position,
	game_map:            Sticker[],
    game_state:            number,
	current_instruction: string,
	match_time:          number
}

const initialState: State = {
    id:                  '',
    host:                '',
    has_navigator:       false,
	has_runner:          false,
	game_set:            false,
	is_active:           false,
	destination:         {x: 0, y: 0 } as Position,
	start_position:      {x: 0, y: 0 } as Position,
	runner_psotion:      {x: 0, y: 0 } as Position,
	game_map:            [] as Sticker[],
    game_state:            0,
	current_instruction: '',
	match_time:          60
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
            state.host = action.payload.host;
            state.has_navigator  = action.payload.has_navigator;
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
        setGameMap:  (state , action : PayloadAction<UnpackedSticker[]>) =>{
            state.game_map = [];
            let inMap : UnpackedSticker[] = action.payload;
            let copiedMap :Sticker[] = [];
            inMap.forEach((e , i) => {
                copiedMap.push({
                    position : {x : e.x , y : e.y } as Position,
                    image : e.image , 
                    width_percentage : e.width_percentage ,
                    height_percentage : e.height_percentage ,
                    position_type : 'absolute'  ,
                    visited : e.visited} as Sticker)
                
            })

            state.game_map = copiedMap;
        },
        setGameID:  (state , action ) =>{
            state.id = action.payload;
           
        },
        countDown: (state) => {
            // state = action.payload;
            if(state.match_time > 0)
            state.match_time -= 1;
            
        },
        setGameMatchTime: (state, action : PayloadAction<number>) => {
            // state = action.payload;
            
            state.match_time = action.payload;
            
        },
        appendStickerToGameMap: (state , action : PayloadAction<Sticker>) => {
            if(state.game_map?.length < 20 * 20)
            state.game_map?.push(action.payload);
            
        },
        removeStickerFromGameMap: (state , action : PayloadAction<number>) => {
            
            state.game_map[action.payload].visited = true;
            
        },
        replaceStickerOnMap: (state , action : PayloadAction<StickerDTO>) => {
            
            state.game_map[action.payload.index].image = action.payload.image;
            
        },
        setDestination: (state , action : PayloadAction<Position>) => {
            
            state.destination = action.payload;
            
        },
        setRandomDestination: (state) =>{
            let min : number      =      Math.ceil(1);
            let max : number      =      Math.floor(20);
            let random_y : number =      Math.floor(Math.random() * ( max - min ) + min) * 25;
            let random_x : number =      Math.floor(Math.random() * ( max - min ) + min) * 25;
            state.destination     =      {x: random_x , y: random_y } as Position ;

            console.log( 'random x', random_x , ' random y ',  random_y);

            for(let position = 0 ; position < state.game_map.length ; position++)
            {
                
                if(state.destination.x == state.game_map[position].position.x && state.destination.y == state.game_map[position].position.y)
                {
                    console.log( 'destintation ', state.game_map[position].position.x ,  state.game_map[position].position.y , ' replaced');
                    state.game_map[position].visited = true;
                }
            }
            
        },
        setGameState: (state , action ) =>{
            state.game_state = action.payload;

        },
        // flag that game has started or stoped
        setGameSet: (state , action ) =>{
            state.game_set = action.payload;

        },
        setHost: (state , action ) =>{
            state.host = action.payload;

        },

        /**
         * takes in an index and returns a row of coordinateds that act as a game board
         * @param state 
         * @param action index of the current row to generate 
         * @Author Alfonso Holmes
         */
        generateRandomizedMap: (state) =>{
          let generated_map : Sticker[] = [];
            /*
            STEP 1).
            + loop through board length
            @Author Alfonso Holmes
          */
         for (let cbl = 0 ; cbl < 20 ; cbl++)
         {
             /*
            STEP 2).
            + establish target y-coordinate
            + generate random number of spaces
            + generate random space map
            @Author Alfonso Holmes
          */
          let min : number =           Math.ceil(0);
          let max : number =           Math.floor(20);
          let target_y : number =      cbl * 25;
          let skips : number =  Math.floor(Math.random() * ( max - min ) + min);
          console.log(' random y ',  target_y , ' number of black grid points' , skips);
           /*
            STEP 3).
            + generate random space map
            + make integer array of length space_map_length filled with 1 or 0.  0 representing a space and 1 representing filled space 
            Ex )
                 [ 0 , 0 , 1 , 1 , 1 , 1]

            @Author Alfonso Holmes
          */
            let rsm : number[] = [];
            let skips_assigned = 0; 
            let mn : number =           Math.ceil(1);
            let mx : number =           Math.floor(4);
            for(let i = 0 ; i < 20 ; i++){
               
                let space_val : number =      Math.floor(Math.random() * ( mx - mn ) + mn);
                if(i % space_val == 0 && skips_assigned < skips)
                {
                    rsm.push(0);
                    skips_assigned++;
                }else{
                    rsm.push(1);
                }
            }
              /*
            STEP 4).
            + use space map to generate row starting at the randomly generate y position
            @Author Alfonso Holmes
          */
            for(let i = 0 ; i < 20 ; i++){

                if(rsm[i] == 1)
                generated_map.push({position : {x: i * 25 , y: target_y } as Position , image : 'Rectangular-Block-Wall-1.jpg' , width_percentage : 5 , height_percentage : 5 , position_type : 'absolute'  , visited : false});
                else 
                generated_map.push({position : {x: i * 25 , y: target_y } as Position , image : ' ' , width_percentage : 5 , height_percentage : 5 , position_type : 'null'  , visited : true});
            }
         }
              /*
            STEP 5).
            + set game map to newly generated one
            @Author Alfonso Holmes
          */

                state.game_map = generated_map;
         
        },
     
        // Used when resetting the state
        resetGame: (state) => {
            state.id                = '';
            state.has_navigator     = false;
            state.has_runner        = false;
            state.game_set          = false;
            state.is_active         = false;
            state.destination       = {x: 0, y: 0 } as Position;
            state.start_position    = {x: 0, y: 0 } as Position;
            state.runner_psotion    = {x: 0, y: 0 } as Position;
            state.game_map          = [];
            state.current_instruction = '';
            state. match_time       = 60;
        
        }
        }
});

// Export the actions/reducers to be imported into a component and dispatched from component
export const {
    setGame,
    setGameID,
    setGameMap,
    setGameSet,
    setHost,
    resetGame,
    countDown,
    appendStickerToGameMap,
    replaceStickerOnMap,
    removeStickerFromGameMap,
    setDestination,
    setGameState,
    setRandomDestination,
    generateRandomizedMap,
    setGameMatchTime

} = gameSlice.actions;

// Export the state of the entire slice to be referenced in the components
export const gameState = (state: RootState) => state.game;

// Export the entire slice to be included in the configureStore inside of store.ts
export default gameSlice.reducer;