import { Position } from "./position";

export class FlaggedSticker{
    coordinates : Position;
    width_percentage : number;
    hieght_percentage : number;
    img : string;
    visited : boolean;
    selected : boolean;

    constructor(coordinates : Position , width_percentage : number , hieght_percentage : number , position_type : string  , visited : boolean , selected : boolean){
        this.coordinates = coordinates;
        this.width_percentage = width_percentage;
        this.hieght_percentage = hieght_percentage;
        this.img = position_type;
        this.visited = visited
        this.selected = selected;
       
    }
}