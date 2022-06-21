function setup(){
    createCanvas(600, 600)
    frameRate(10)
    food.add()
}

function draw(){
    background(51)  
    snake.update()
    snake.show()
    food.show()
}

function keyPressed(){
    switch(keyCode){
        case UP_ARROW: 
            snake.move(0, -1)
            break
        case DOWN_ARROW:
            snake.move(0, 1)
            break
        case RIGHT_ARROW:
            snake.move(1, 0)
            break
        case LEFT_ARROW:
            snake.move(-1, 0)
            break
    }
}