class Enemy extends HitRect{
	constructor(image, x, y) {
		super(image,x,y)
        this.image =    image;
		this.originx =  x;
        this.x =        x;
        this.y =        y;
		this.velx=      4;
		this.vely=      0;
        this.w =        image.width;
        this.h =        image.height;
        this.imageArray =[];
	}

	update(rectlist) {
		if (this.x < canvas.width || this.x > 0){//Only walk if on screen
			for (var rect in rectlist){
				if (rectlist[rect].collideRect(this)){ // If this hits something turn around
					console.log("hit")
					this.velx*=-1
					this.x += this.velx
				}
			}
			if (Math.abs(this.x-this.originx) > canvas.width/2){
				this.velx *=-1
			}
			this.x = this.x + this.velx
			this.y = this.y + this.vely
		}
	}
	// shoot(){
	// 	objarray.push(new bullet(IMAGEDICT["misc"],this.x,this.y))
	// }
}