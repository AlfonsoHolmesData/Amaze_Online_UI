import { Position } from "./position";

export class Sticker{
    coordinates : Position;
    image : string;
    width_percentage : number;
    hieght_percentage : number;
    position_type : string;


    constructor(coordinates : Position , image : string , width_percentage : number , hieght_percentage : number , position_type : string ){
        this.coordinates = coordinates;
        this.image = image;
        this.width_percentage = width_percentage;
        this.hieght_percentage = hieght_percentage;
        this.position_type = position_type;
    }
}