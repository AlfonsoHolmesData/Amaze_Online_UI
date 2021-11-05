import { Position } from "./position";

export class UploadMapDTO{
    id : string ;
    name : string | undefined ;
    creator : string ; 
    blueprint : [];

    constructor(id : string , name : string , creator : string ,  blueprint : []){
        this.id = id;
        this.creator = creator;
        this.blueprint = blueprint;
        this.name = name;
    }
}