var paddle;

function setup() {
    createCanvas(windowWidth, windowHeight);
    paddle = new Paddle();
}

function draw() {
    background(200);

    paddle.display();
    paddle.checkEdges()
    paddle.update();
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