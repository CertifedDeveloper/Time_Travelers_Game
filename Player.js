class PlayerRect extends HitRect{
    constructor(image, x, y) {
        super(image,x,y)
        this.image =    image;
        this.x =        x;
        this.y =        y;
        this.velx=      0;
        this.vely=      0;
        this.offsetx =  0;
        this.offsety =  0;
        this.w =        image.width;
        this.h =        image.height;
        this.grounded = false;
        this.health = 1;
        this.imageArray =[];
        this.hits = []
    }
    move(rectlist){
        
        //INPUT HANDLING INPUT HANDLING INPUT HANDLING 
        if (keypress["Left"]){
            this.velx = (this.velx-3)/1.4;
        }
        else if (keypress["Right"]){
            this.velx = (this.velx+3)/1.4;
        }
        else{
            this.velx *= 0.49;
        }
        if (keypress["Up"] && this.grounded){
            this.vely = -24;
        }
        else if (keypress["Down"]){
            //dimension shift
        }

        this.vely+=2;//Applies Gravity
        this.y+=this.vely;

        this.hits = this.collideList(rectlist)
        this.grounded = this.hits.length > 0 && this.vely > 0;

        //COLLISION DETECTION COLLISION DETECTION COLLISION DETECTION
        if (this.hits.length > 0 && this.vely != 0){
            this.y -= this.vely
            this.vely = this.vely*0.49;
            //reset boundaries of clipping boundaries.
        }
        this.hits = this.collideList(rectlist)
        if (this.hits.length > 0 && this.velx != 0){
            this.velx = this.velx*-1
        }

        

        return this.x, this.y
    }
    draw(){
        c.drawImage(this.image,this.x,this.y);
    }
}