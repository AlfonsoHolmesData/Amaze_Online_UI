import { isAsyncThunkAction } from "@reduxjs/toolkit";

export class User{

    username: string;
    password: string;
    rank: string; 
    games_as_navigator : number;
    games_as_runner : number;
    wins : number;
    win_percentage : number;
    total_games_played : number;


    constructor( username: string , password: string , rank: string , games_as_navigator : number , games_as_runner : number , wins : number , win_percentage : number , total_games_played : number)
    {
        this.username = username;
        this.password = password;
        this.rank = rank;
        this.games_as_navigator = games_as_navigator;
        this.games_as_runner = games_as_runner;
        this.wins = wins;
        this.win_percentage = win_percentage;
        this.total_games_played = total_games_played;
    }
}