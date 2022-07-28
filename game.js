function setup(){
    let canvas = createCanvas(800, 600)
    let x = (windowWidth - width) / 2
    let y = (windowHeight - height) / 20
    canvas.position(x, y)
    frameRate(10)
    food.add()
}

function draw(){
    background(51) 
    if(snake.eat(food)){
        snake.size++
        food.add()
    } 
    snake.die()
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