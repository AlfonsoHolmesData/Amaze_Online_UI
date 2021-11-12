import { Position } from "./position";

export class  RunTimePlayerModelDTO{

     username: string;
     color: string;
     location: Position;
     points: number;
     isDead: boolean;
     isHost: boolean;
   
    constructor(username: string, color: string, location: Position, points: number, isDead: boolean, isHost: boolean )
    {
        
        this.username = username;
        this.points = points;
        this.color = color;
        this.location = location;
        this.isDead = isDead;
        this.isHost = isHost;
    }
}