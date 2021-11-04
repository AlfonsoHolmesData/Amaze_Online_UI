
export class UnpackedSticker{
    x : number;
    y : number;
    image : any;
    width_percentage : number;
    height_percentage : number;
    position_type : string;
    visited : boolean;

    constructor(x : number , y : number , image : any , width_percentage : number , height_percentage : number , position_type : string  , visited : boolean){
        this.x = x;
        this.y = y;
        this.image = image;
        this.width_percentage = width_percentage;
        this.height_percentage = height_percentage;
        this.position_type = position_type;
        this.visited = visited
       
    }
}