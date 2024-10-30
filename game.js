let songEat;
let songDeath;
let velocityFrameRate = 9;
let points = 0;
let score;
let direction = 'right';
let isGameRunning = true; 
let canvas;

function setup(){
    const container = document.querySelector('.canvas-container');
    x = 580
    y = 580

    canvas = createCanvas(x, y); 
    canvas.parent(container); 

    let stopButton = createButton('Parar');
    stopButton.position(10, 10);
    stopButton.mousePressed(stopGame);

    let startButton = createButton('Continuar');
    startButton.position(10, 40);
    startButton.mousePressed(startGame);

    songEat = loadSound('sounds/human-male-enjoy-humm.wav');
    songDeath = loadSound('sounds/retro-arcade-lose.wav');

    frameRate(velocityFrameRate);
    food.add();

    score = document.getElementById('score');
    showPoints(points);
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
    if (isGameRunning) {
        background(51) 
        showAxis()
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
}

function showAxis(){
    fill(255);  
    textAlign(CENTER, CENTER);
    text("(0,0)", 15, 15);  
    text("(" + (width - 20) + ",0)", width - 25, 15); 
    text("(0," + (height - 20) + ")", 20, height - 20);
    text("(" + (width - 20) + ","+(height - 20 )+")", 550, 560); 

}

function stopGame() {
    noLoop(); 
    isGameRunning = false; 
}

function startGame() {
    loop(); 
    isGameRunning = true; 
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