class GuaScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    addElement(guaimage) {
        guaimage.scene = this
        this.elements.push(guaimage)
    }
    draw() {
        for (e of this.elements) {
            e.draw()
        }
        // for (var i = 0; i < this.elements.length; i++) {
        //     var e = this.elements[i]
        //     e.draw()
        // }
    }
    update() {
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            e.update()
        }
    }
}
