var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

let snakeX = blockSize * 5;
let snakeY = blockSize * 5;
let vy = 0;
let vx = blockSize;
let snakeBody = [];

let foodX = blockSize * 10;
let foodY = blockSize * 10;
let score = 0;

var gameOver = false;

window.addEventListener('load', function() {
    board = document.getElementById('board');
    board.height = cols * blockSize;
    board.width = rows * blockSize;
    context = board.getContext('2d');

    document.addEventListener('keydown', dir);
    setInterval(update, 150);
});

function update() {
    if (gameOver) {
        return;
    }

    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX === foodX && snakeY === foodY) {
        snakeBody.push([foodX, foodY]);
        moveFood();
        score++;
    }

    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }

    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle="lime";
    snakeX += vx;
    snakeY += vy;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    if (snakeX < 0 || snakeX > cols*blockSize || snakeY < 0 || snakeY > rows*blockSize) {
        gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
        }
    }
}

function dir(e) {
    if (e.key === "w" && vy != blockSize) {
        vx = 0;
        vy = -blockSize;
    } else if (e.key === "s" && vy != -blockSize) {
        vx = 0;
        vy = blockSize;
    } else if (e.key === "a" && vx != blockSize) {
        vy = 0;
        vx = -blockSize;
    } else if (e.key === "d" && vx != -blockSize) {
        vy = 0;
        vx = blockSize;
    }
}

function moveFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}