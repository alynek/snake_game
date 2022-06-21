const food = {
    position: 0,
    scale: 20,

    add(){
        this.position = createVector(random(width), random(height))
    },

    show(){
        fill(255, 0, 100)
        rect(this.position.x, this.position.y, this.scale, this.scale)
    }
}