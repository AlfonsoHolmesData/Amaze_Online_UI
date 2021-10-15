import { Position } from "./position";

export class  RunTimePlayerModelDTO{

    username: string;
    points: number;
    is_navigator: boolean;
    instruction: string;
    current_position: Position;
    afk: boolean;
   
    constructor(username: string, points: number, is_navigator: boolean, instruction: string, current_position: Position, afk: boolean )
    {
        
        this.username = username;
        this.points = points;
        this.is_navigator = is_navigator;
        this.instruction = instruction;
        this.current_position = current_position;
        this.afk = afk;
       
    }
}