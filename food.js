const food = {
    position: 0,
    scale: 20,

    add(){
        let cols = floor(width / this.scale)
        let rows = floor(height / this.scale)
        this.position = createVector(floor(random(cols)), floor(random(rows)))
        this.position.mult(this.scale)
    },

    show(){
        fill(255, 0, 100)
        rect(this.position.x, this.position.y, this.scale, this.scale)
    },

    mostraPosicaoComida(){
        console.log(`Coordenada X: ${this.position.x}`)
        console.log(`Coordenada Y: ${this.position.y}`)
    }
}