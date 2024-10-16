function Brick() {
    this.w = 100;
    this.h = 50;

    this.life = 2

    this.pos = {};

    this.display = function() {
        fill(92, 241, 96)
        rect(this.pos.x, this.pos.y, this.w, this.h);
    }

    this.update = function() {

    }
}