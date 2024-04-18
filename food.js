const food = {
    position: 0,
    scale: 20,

    add(){
        let cols = floor(width / this.scale)
        let rows = floor(height / this.scale)
        this.position = createVector(floor(random(1, (cols - 1))), floor(random(1, (rows - 1))))
        this.position.mult(this.scale)
    },

    show(){
        fill(255, 0, 100)
        rect(this.position.x, this.position.y, this.scale, this.scale)
    }
}