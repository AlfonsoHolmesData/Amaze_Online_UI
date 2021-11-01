import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import {createStore, combineReducers} from 'redux'
import playerReducer from "../AmazeOnlineStateSlices/amaze-player-slice";
import gameReducer from "../AmazeOnlineStateSlices/amaze-game-slice";
import authReducer from "../AmazeOnlineStateSlices/auth-slice";
import appReducer from "../AmazeOnlineStateSlices/app-state-slice";
import timeReducer from "../AmazeOnlineStateSlices/global-time-slice";
import createMapReducer from "../AmazeOnlineStateSlices/create-gamemap-slice";



export const store = configureStore({
    reducer: {
      game: gameReducer,
      create: createMapReducer,
      auth: authReducer,
      app: appReducer,
      time: timeReducer,
      player: playerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;