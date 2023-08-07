let songEat;
let songDeath;
let velocityFrameRate = 9;
let points = 0;
let score;
let direction = 'right'

function setup(){
    let canvas = createCanvas(600, 600)
    x = (windowWidth - width) / 2 
    y = (windowHeight - height) / 20
    canvas.position(x, y)

    songEat = loadSound('sounds/human-male-enjoy-humm.wav');
    songDeath = loadSound('sounds/retro-arcade-lose.wav');

    frameRate(velocityFrameRate)
    food.add()

    score = document.getElementById('score')
    showPoints(points)
}

function songEatLoaded() {
    songEat.setVolume(0.1);
    songEat.play()
}

function songDeathLoaded() {
    songDeath.setVolume(0.1);
    songDeath.play()
}

function increaseFrameRate(points){
    if(points % 2 == 0){
        velocityFrameRate++
        frameRate(velocityFrameRate)
    }
}

function showPoints(points){
    score.innerHTML = `SCORE: ${points}`
}

function draw(){
    background(51) 
    if(snake.eat(food)){
        snake.upLevelSnake()
        food.add()

        points +=5
        showPoints(points)
        increaseFrameRate(points)
        
        songEatLoaded()
    } 
    snake.die(x, y)
    snake.update()
    snake.show()
    food.show()
}

function keyPressed(){

    if(keyCode == UP_ARROW){
        if(snake.size == 0 || direction != 'down'){
            direction = 'up'
            snake.move(0, -1)
        }
        else{
            return;
        }
    }
    if(keyCode == DOWN_ARROW){
        if(snake.size == 0 || direction != 'up'){
            direction = 'down'
            snake.move(0, 1)
        }
        else{
            return;
        }
    }
    if(keyCode == RIGHT_ARROW){
        if(snake.size == 0 || direction != 'left'){
            direction = 'right'
            snake.move(1, 0)
        }
        else{
            return;
        }
    }
    if(keyCode == LEFT_ARROW){
        if(snake.size == 0 || direction != 'right'){
            direction = 'left'
            snake.move(-1, 0)
        }
        else{
            return;
        }
    }
}