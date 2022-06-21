const snake = {
    x: 0,
    y: 0,
    xspeed: 1,
    yspeed: 0,
    scale: 20,

    update(){
        this.x += this.xspeed * this.scale
        this.y += this.yspeed * this.scale

        this.x = constrain(this.x, 0, width - this.scale)
        this.y = constrain(this.y, 0, height - this.scale)
    },

    show(){
        fill(255)
        rect(this.x, this.y, this.scale, this.scale)
    },

    move(x, y){
        this.xspeed = x
        this.yspeed = y
    }
}

