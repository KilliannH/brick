function Brick() {
    this.w = 100;
    this.h = 50;

    this.pos = {};

    this.display = function() {
        rect(this.pos.x, this.pos.y, this.w, this.h);
    }

    this.update = function() {

    }
}