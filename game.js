let songEat;
let songDeath;

function setup(){
    let canvas = createCanvas((windowWidth - 500), (windowHeight - 100))
    let x = (windowWidth - width) / 2 
    let y = (windowHeight - height) / 20
    canvas.position(x, y)

    songEat = loadSound('sounds/human-male-enjoy-humm.wav');
    songDeath = loadSound('sounds/retro-arcade-lose.wav');
    

    frameRate(10)
    food.add()
}

function songEatLoaded() {
    songEat.setVolume(0.1);
    songEat.play()
}

function songDeathLoaded() {
    songDeath.setVolume(0.1);
    songDeath.play()
}

function draw(){
    background(51) 
    if(snake.eat(food)){
        snake.size++
        food.add()
        songEatLoaded()
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