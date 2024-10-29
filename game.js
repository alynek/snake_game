let songEat;
let songDeath;
let velocityFrameRate = 9;
let points = 0;
let score;
let direction = 'right';
let isGameRunning = true; 
let canvas;

function setup(){
    canvas = createCanvas(600, 600)
    x = (windowWidth - width) / 2 
    y = (windowHeight - height) / 20
    canvas.position(x, y)

    let stopButton = createButton('Parar');
    stopButton.position(10, 10);
    stopButton.mousePressed(stopGame); // Chama a função stopGame ao clicar

    let startButton = createButton('Continuar');
    startButton.position(10, 40);
    startButton.mousePressed(startGame); // Chama a função startGame ao clicar

    songEat = loadSound('sounds/human-male-enjoy-humm.wav');
    songDeath = loadSound('sounds/retro-arcade-lose.wav');

    frameRate(velocityFrameRate)
    food.add()

    score = document.getElementById('score')
    showPoints(points)
}

function centerCanvas() {
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    canvas.position(x, y);
}

function windowResized() {
    centerCanvas(); // Centraliza novamente o canvas
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
        coordenadas()
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

function coordenadas(){
    fill(255);   // Cor branca para o texto dos rótulos

    // Rótulos para os extremos dos eixos
    textAlign(CENTER, CENTER);
    text("(0,0)", 15, 15);  // Rótulo da origem no canto superior esquerdo
    text("(" + (width - 20) + ",0)", width - 25, 15);   // Rótulo do final do eixo X no canto superior direito
    text("(0," + (height - 20) + ")", 20, height - 20); // Rótulo do final do eixo Y no canto inferior esquerdo
    text("(" + (width - 20) + ","+(height - 20 )+")", 570, 590); // Rótulo do final do eixo X e Y no canto inferior direito

}

function stopGame() {
    noLoop(); // Para o loop
    isGameRunning = false; // Atualiza o estado do jogo
}

function startGame() {
    loop(); // Retoma o loop
    isGameRunning = true; // Atualiza o estado do jogo
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