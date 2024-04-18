const snake = {
    x: 20,
    y: 20,
    xspeed: 1,
    yspeed: 0,
    scale: 20,
    size: 0,
    tail: [],

    update(){
        for(let i = 0; i < this.tail.length - 1; i++){
            this.tail[i] = this.tail[i + 1]
        }

        if(this.size >= 1){
            this.tail[this.size - 1] = createVector(this.x, this.y)
        }

        this.x += this.xspeed * this.scale
        this.y += this.yspeed * this.scale

        this.x = constrain(this.x, 0, width - this.scale)
        this.y = constrain(this.y, 0, height - this.scale)
    },

    show(){
        fill(255)

        for(let i = 0; i < this.tail.length; i++){
            rect(this.tail[i].x, this.tail[i].y, this.scale, this.scale)
        }
        rect(this.x, this.y, this.scale, this.scale, 20, 15, 10, 5)

    },

    move(x, y){
        this.xspeed = x
        this.yspeed = y
    },

    eat(food){
        let distance = dist(this.x, this.y, food.position.x, food.position.y)
        return distance < 1
    },

    upLevelSnake(){
        snake.size++
    },

    die(){
        for(let i = 0; i < this.tail.length; i++){
            let distance = dist((this.x - 20), (this.y - 20), (this.tail[i].x - 20), (this.tail[i].y - 20))
            if(distance < 1){
                this.size = 0
                this.tail = []
                
                bestScore.update(points)
                points = 0
                showPoints(points)
                velocityFrameRate = 9;
                frameRate(velocityFrameRate)

                songDeathLoaded()
            }
        }
    }
}

