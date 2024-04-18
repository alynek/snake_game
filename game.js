let songEat;
let songDeath;
let velocityFrameRate = 11;
let points = 0;
let score;
let direction = 'right'
let songs = [];
let currentSongIndex = 0;

function preload() {
    img1 = loadImage('bricks.png');
    img2 = loadImage('bricks2.png');
    songs.push(loadSound('sounds/b.wav'))
    songs.push(loadSound('sounds/b2.mp3'))
}


function setup(){
    let canvas = createCanvas(600, 600)
    x = (windowWidth - width) / 2 
    y = (windowHeight - height) / 20

    noFill();

    songEat = loadSound('sounds/human-male-enjoy-humm.wav');
    songDeath = loadSound('sounds/retro-arcade-lose.wav');

    frameRate(velocityFrameRate)
    food.add()

    score = document.getElementById('score')
    showPoints(points)

    if (currentSongIndex < songs.length) {
        songs[currentSongIndex].play();
        songs[currentSongIndex].setVolume(0.05);
        currentSongIndex++;
    }
}

function drawBorderImage(img1, img2, thickness) {
    // Desenha a imagem nas bordas do canvas com a espessura especificada
    image(img2, 0, 0, thickness, 600); // Esquerda
    image(img2, 600 - thickness, 0, thickness, 600); // Direita
    image(img1, 0, 0, 600, thickness); // Superior
    image(img1, 0, 600 - thickness, 600, thickness); // Inferior
  }

function songEatLoaded() {
    songEat.setVolume(0.01);
    songEat.play()
}

function songDeathLoaded() {
    songDeath.setVolume(0.04);
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
    drawBorderImage(img1, img2, 20); 
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