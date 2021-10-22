import { isAsyncThunkAction } from "@reduxjs/toolkit";

export class UserDTO{

    username: string;
    password: string;
    games_as_navigator : number;
    games_as_runner : number;
    wins : number;
    


    constructor( username: string , password: string , games_as_navigator : number , games_as_runner : number , wins : number)
    {
        this.username = username;
        this.password = password;
        this.games_as_navigator = games_as_navigator;
        this.games_as_runner = games_as_runner;
        this.wins = wins;
    
    }
}