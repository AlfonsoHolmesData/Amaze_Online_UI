import { Position } from "./position";

export class Credentials{
    username : string;
    password : string;


    constructor( username : string , password : string ){
        this.username = username;
        this.password = password;
    }
}