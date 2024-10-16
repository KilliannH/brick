var paddle;
var ball;
var bricks = [];
var gameOver = false; // Track game state

function setup() {
    createCanvas(800, 952);
    resetGame(); // Call resetGame to initialize game elements
}

function draw() {
    background(200);

    if (!gameOver) {
        paddle.display();
        paddle.checkEdges();
        paddle.update();

        ball.display();
        ball.update();
        ball.checkEdges();

        for (let i = bricks.length - 1; i >= 0; i--) {
            bricks[i].display();
            if (ball.hits(bricks[i])) {
                ball.direction.y *= -1; // Reverse ball direction
                bricks[i].hit(); // Decrease brick life
                if (!bricks[i].isAlive()) {
                    bricks.splice(i, 1); // Remove brick if it is not alive
                }
            }
        }

        if (ball.meets(paddle) && ball.direction.y > 0) {
            ball.direction.y *= -1; // Reverse direction on paddle hit
        }

        // Game over condition
        if (ball.pos.y > height) {
            console.log("GAME OVER");
            gameOver = true; // Set game over state
        }
    } else {
        // Display game over message
        fill(0);
        textSize(32);
        textAlign(CENTER);
        text("GAME OVER", width / 2, height / 2);
        textSize(16);
        text("Press 'R' to Restart", width / 2, height / 2 + 30);
    }
}

function resetGame() {
    paddle = new Paddle(); // Reinitialize the paddle
    ball = new Ball(); // Reinitialize the ball
    ball.pos.y = paddle.pos.y - ball.r; // Set ball above the paddle
    bricks = []; // Reset the bricks array

    // Create new bricks
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 7; j++) {
            var brick = new Brick(j * 100 + 50, i * 50 + 100); // Pass position to Brick constructor
            bricks.push(brick);
        }
    }
    gameOver = false; // Reset game over state
}

function keyPressed() {
    if (key === 'ArrowLeft') {
        paddle.isMovingLeft = true;
        paddle.isMovingRight = false;
    } else if (key === 'ArrowRight') {
        paddle.isMovingRight = true;
        paddle.isMovingLeft = false;
    } else if (key === 'r' || key === 'R') { // Restart game
        resetGame();
    }
}

function keyReleased() {
    if (key === 'ArrowLeft' || key === 'ArrowRight') {
        paddle.isMovingLeft = false;
        paddle.isMovingRight = false;
    }
}