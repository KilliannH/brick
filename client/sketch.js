var paddle;
var ball;

function setup() {
    createCanvas(windowWidth, windowHeight);
    paddle = new Paddle();
    ball = new Ball();
}

function draw() {
    background(200);

    paddle.display();
    paddle.checkEdges()
    paddle.update();

    ball.display();
    ball.update();
    ball.checkEdges();
}



function keyPressed() {
    if(key === 'ArrowLeft') {
        paddle.isMovingLeft = true;
        paddle.isMovingRight = false;
    } else if(key === 'ArrowRight') {
        paddle.isMovingRight = true;
        paddle.isMovingLeft = false;
    }
}

function keyReleased() {
    if(key === 'ArrowLeft' || key === 'ArrowRight') {
        paddle.isMovingLeft = false;
        paddle.isMovingRight = false;
    }
  }