import { Position } from "./position";

export class Sticker{
    position : Position;
    image : any;
    width_percentage : number;
    height_percentage : number;
    position_type : string;
    visited : boolean;

    constructor(position : Position , image : any , width_percentage : number , height_percentage : number , position_type : string  , visited : boolean){
        this.position = position;
        this.image = image;
        this.width_percentage = width_percentage;
        this.height_percentage = height_percentage;
        this.position_type = position_type;
        this.visited = visited
       
    }
}