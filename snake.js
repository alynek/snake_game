function setup(){
    createCanvas(600, 600)
}

function draw(){
    background(51)
    snake.update()
    snake.show()
}

const snake = {
    x: 0,
    y: 0,
    width: 10,
    height: 10,
    xspeed: 1,
    yspeed: 0,
    update(){
        this.x += this.xspeed
        this.y += this.yspeed
    },

    show(){
        rect(this.x, this.y, this.width, this.height)
    }
}