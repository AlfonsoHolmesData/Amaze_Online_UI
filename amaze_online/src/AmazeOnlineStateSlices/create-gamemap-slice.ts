import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { Position } from "../AmazeOnlineModels/position";
import { Sticker } from "../AmazeOnlineModels/grid-sticker";
import { StickerDTO } from "../AmazeOnlineModels/grid-sticker-DTO";
import { FlaggedSticker } from "../AmazeOnlineModels/grid-sticker-checked";






interface State {
  
	game_map:            FlaggedSticker[],
    amount_selected: number,
    special_selected: number,
    cleared: boolean,
    max_amount_of_special_spaces: number

}

const initialState: State = {
 
	game_map:            [] as FlaggedSticker[],
    amount_selected: 0,
    special_selected: 0,
    cleared: false,
    max_amount_of_special_spaces: 3
   
};

// Create the actual slice
export const createMapSlice = createSlice({
    // Name the slice
    name: 'create',

    // Pass in the initial state
    initialState,

    // Define the reducers/actions to be called by the dispatcher within the components
    reducers: {
        // Define action names here: pass in the state, define how the state is manipulated within the reducer
        
     
        fillMap: (state ) => {
            for (let x = 0; x < 20; x++) {
                for (let y = 0; y < 20; y++) {
                  state.game_map.push({coordinates : {x: x * 25 , y: y * 25 } as Position , width_percentage : 5 , hieght_percentage : 5 , img : 'Rectangular-Block-Wall-1.jpg'  , visited : false , selected : false});
                }
              }
              state.cleared = false;
        },
        clearMap: (state ) => {
            
                  state.game_map.forEach((s) => {
                       s.selected = false;
                       s.visited = true;
                       s.img = 'Rectangular-Block-Wall-1.jpg';
                  });
               
            state.cleared = true;
        },
        renderMap: (state ) => {
            
            state.game_map.forEach((s) => {
                 s.selected = false;
                 s.visited = false;
            });
         
      state.cleared = false;
  },
        appendStickerToGameMap: (state , action : PayloadAction<FlaggedSticker>) => {
            if(state.game_map?.length < 20 * 20)
            state.game_map?.push(action.payload);
            
        },
        anointSelectedStickers: (state ) => {
           
            state.game_map.forEach((s) => { 
                if(s.selected == true && state.special_selected < state.max_amount_of_special_spaces )
                {
                    let mn : number =           Math.ceil(1);
                    let mx : number =           Math.floor(4);
                    let ran = Math.floor(Math.random() * ( mx - mn ) + mn)
                   switch (ran) {
                       case 1:
                           s.img = 'robot.gif';   
                           s.selected = false;
                           state.special_selected++;
                           break;
                           case 2:
                                s.img = 'question-mark.gif';
                                s.selected = false;
                                state.special_selected++;
                                break; 
                                case 3:
                                s.img = 'gadgetboy.gif';
                                s.selected = false;
                                state.special_selected++;
                                    break;
                                    
                 
                   } 
                   
                }
            })

                state.amount_selected = 0; 
            
        },
        selectSticker: (state , action : PayloadAction<number>) => {
            if(state.game_map[action.payload].selected == false)
            {
                state.game_map[action.payload].selected = true;
                state.amount_selected++;
            }
            
            
        },
        clearSelected: (state ) => {
           state.game_map.forEach((s) => { 
               if(s.selected == true)
               {
               
                  s.visited = true;
                  s.selected = false;
               }
           })

           state.amount_selected = 0;
            
        },
        removeStickerFromGameMap: (state , action : PayloadAction<number>) => {
            
            state.game_map[action.payload].visited = true;
            if( state.game_map[action.payload].selected == true)
                state.amount_selected--;
        }
      
      
    }
});

// Export the actions/reducers to be imported into a component and dispatched from component
export const {
    fillMap,
    clearMap,
    renderMap,
    selectSticker,
    clearSelected,
    anointSelectedStickers,
    appendStickerToGameMap,
    removeStickerFromGameMap
   

} = createMapSlice.actions;

// Export the state of the entire slice to be referenced in the components
export const createMapState = (state: RootState) => state.create;

// Export the entire slice to be included in the configureStore inside of store.ts
export default createMapSlice.reducer;