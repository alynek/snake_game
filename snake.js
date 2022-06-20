const snake = {
    x: 0,
    y: 0,
    width: 10,
    height: 10,
    xspeed: 0,
    yspeed: 0,
    update(){
        this.x += this.xspeed
        this.y += this.yspeed
    },

    show(){
        rect(this.x, this.y, this.width, this.height)
    },

    move(x, y){
        this.xspeed = x
        this.yspeed = y
    }
}

