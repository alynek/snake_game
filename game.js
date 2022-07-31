let songEat;
let songDeath;
let velocityFrameRate = 9;
let points = 0;
let score;

function setup(){
    let canvas = createCanvas(600, 600)
    let x = (windowWidth - width) / 2 
    let y = (windowHeight - height) / 20
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
        snake.size++
        food.add()

        points +=5
        showPoints(points)
        increaseFrameRate(points)
        
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