const GREEN_FULL_COLOR = {r: 92, g: 241, b: 96}
const GREEN_HALF_COLOR = {r: 98, g: 173, b: 100}

function Brick(x, y) {
    this.w = 100;
    this.h = 50;
    this.life = 2;

    this.color = GREEN_FULL_COLOR

    this.pos = createVector(x, y); // Initialize position with given coordinates

    this.display = function() {
        if (this.life > 0) {
            fill(this.color.r, this.color.g, this.color.b); // Color for alive brick
        } else {
            fill(150); // Color for destroyed brick
        }
        rect(this.pos.x, this.pos.y, this.w, this.h);
    };

    this.update = function() {
        // You can add any update logic here if needed
    };

    this.hit = function() {
        this.life -= 1; // Decrease life on hit
        this.color = GREEN_HALF_COLOR
    };

    this.isAlive = function() {
        return this.life > 0; // Check if brick is still alive
    };
}