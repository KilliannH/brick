function Paddle() {
    this.w = 160;
    this.h = 20;
    this.speed = 5;

    this.isMovingRight = false;
    this.isMovingLeft = false;

    this.pos = createVector(width / 2 - this.w / 2, height - 40);

    this.display = function() {
        fill(255);
        rect(this.pos.x, this.pos.y, this.w, this.h);
    };

    this.update = function() {
        if (this.isMovingLeft) {
            this.move(-this.speed);
        } 
        if (this.isMovingRight) {
            this.move(this.speed);
        }
        this.checkEdges(); // Ensure edges are checked after movement
    };

    this.move = function(step) {
        this.pos.x += step;
    };

    this.checkEdges = function() {
        this.pos.x = constrain(this.pos.x, 0, width - this.w); // Use constrain for edge checking
    };
}