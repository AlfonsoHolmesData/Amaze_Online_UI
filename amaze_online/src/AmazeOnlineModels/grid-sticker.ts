import { Position } from "./position";

export class Sticker{
    coordinates : Position;
    image : string;
    width_percentage : number;
    hieght_percentage : number;
    position_type : string;
    visited : boolean;

    constructor(coordinates : Position , image : string , width_percentage : number , hieght_percentage : number , position_type : string  , visited : boolean){
        this.coordinates = coordinates;
        this.image = image;
        this.width_percentage = width_percentage;
        this.hieght_percentage = hieght_percentage;
        this.position_type = position_type;
        this.visited = visited
       
    }
}