import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import {createStore, combineReducers} from 'redux'
import playerReducer from "../AmazeOnlineStateSlices/amaze-player-slice";
import gameReducer from "../AmazeOnlineStateSlices/amaze-game-slice";


export const store = configureStore({
    reducer: {
      game: gameReducer,
      player: playerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;