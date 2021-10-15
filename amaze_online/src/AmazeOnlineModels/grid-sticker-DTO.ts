import { Position } from "./position";

export class StickerDTO{
    image : string;
    index : number;


    constructor( image : string , index : number ){
        this.image = image;
        this.index = index;
    }
}