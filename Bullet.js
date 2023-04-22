class Bullet {
	constructor(image, x, y,velocity) {
        this.image =    image;
        this.x =        x;
        this.y =        y;
        this.w =        image.width;
        this.width =    image.width;
        this.h =        image.height;
        this.height =   image.height;
        this.imageName =null;
        this.message =  "";
        this.char = "1"
		this.speed = 10
		this.velocity = velocity
	}
	update(enemyarray,PlayerRect) {
		this.x = this.x + this.velocity[0]
		this.y = this.y + this.velocity[1]
		for(var enemy in enemyarray){
			if (this.collideRect(enemy)){
				delete enemyarray[enemy]
				return true
			}
			else if (this.collideRect(PlayerRect)){
				delete enemyarray[enemy]
				cont = false
			}
		}
		return false
	}
}