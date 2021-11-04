import { Position } from "./position";

export class UploadMapDTO{
    id : string ;
    creator : string ; 
    blueprint : [];

    constructor(id : string , creator : string ,  blueprint : []){
        this.id = id;
        this.creator = creator;
        this.blueprint = blueprint;
       
    }
}