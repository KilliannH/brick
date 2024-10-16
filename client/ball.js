function Ball() {
    this.pos = createVector(width / 2, height / 2);
    this.speed = 5;
    this.r = 10;

    this.direction = createVector(random(-1, 1), 1); // Always moving up
    this.direction.normalize();
    this.vel = this.direction.copy().mult(this.speed);

    this.display = function() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    };

    this.update = function() {
        this.pos.add(this.vel.copy().mult(this.direction));
    };

    this.checkEdges = function() {
        if (this.pos.y < this.r && this.direction.y < 0) {
            this.direction.y *= -1;
        }
        
        if (this.pos.y > height - this.r) {
            console.log("GAME OVER");
        }

        if (this.pos.x < this.r && this.direction.x < 0) {
            this.direction.x *= -1;
        }

        if (this.pos.x > width - this.r && this.direction.x > 0) {
            this.direction.x *= -1;
        }
    };

    this.meets = function(paddle) {
        return (
            this.pos.y + this.r >= paddle.pos.y && // Bottom of the ball is at or below the paddle's top
            this.pos.y - this.r <= paddle.pos.y + paddle.h && // Top of the ball is at or above the paddle's top
            this.pos.x + this.r >= paddle.pos.x && // Right side of the ball is at or past the paddle's left
            this.pos.x - this.r <= paddle.pos.x + paddle.w // Left side of the ball is at or past the paddle's right
        );
    };

    this.hits = function(brick) {
        return this.pos.y < brick.pos.y + brick.h &&
               this.pos.y > brick.pos.y - this.r &&
               this.pos.x < brick.pos.x + brick.w + this.r &&
               this.pos.x > brick.pos.x - this.r;
    };
}