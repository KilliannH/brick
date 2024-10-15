var paddle;
var ball;

var bricks = [];

function setup() {
    createCanvas(800, 952);
    paddle = new Paddle();
    ball = new Ball();

    for(let i = 0; i < 3; i++) {
        for (let j = 0; j < 7; j++) {
            var brick = new Brick();
            var iterator = 100;
            brick.pos = createVector(j * iterator + 50, i * iterator + 100);
            bricks.push(brick)
        }    
    }
    console.log(bricks)
}

function draw() {
    background(200);

    paddle.display();
    paddle.checkEdges()
    paddle.update();

    ball.display();
    ball.update();
    ball.checkEdges();

    for(let i = 0; i < bricks.length; i++) {
        bricks[i].display()
    }

    if(ball.meets(paddle) && ball.direction.y > 0) {
        ball.direction.y *= -1;
    }
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