const snake = {
    x: 0,
    y: 0,
    xspeed: 1,
    yspeed: 0,
    scale: 20,
    size: 0,
    tail: [],
    prevX : 0,
    prevY : 0,

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

        if (this.x !== this.prevX || this.y !== this.prevY) {
            console.log(`Coordenada X: ${this.x}`);
            console.log(`Coordenada Y: ${this.y}`);

            this.prevX = this.x;
            this.prevY = this.y;
        }
    },

    mostraPosicaoSnake(){
        console.log(`Coordenada X: ${this.x}`)
        console.log(`Coordenada Y: ${this.y}`)
    },

    show(){
        fill(255)

        for(let i = 0; i < this.tail.length; i++){
            rect(this.tail[i].x, this.tail[i].y, this.scale, this.scale)
        }
        rect(this.x, this.y, this.scale, this.scale, 20, 15, 10, 5)

    },

    move(x, y){
        console.log(`Coordenada X: ${this.x}`)
        this.xspeed = x
        console.log(`Coordenada Y: ${this.y}`)
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
            let distance = dist(this.x, this.y, this.tail[i].x, this.tail[i].y)
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

