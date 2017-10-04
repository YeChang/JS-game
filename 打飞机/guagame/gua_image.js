class GuaImage {
    constructor(game, name) {
        this.game = game
        this.texture = game.textureByName(name)
        this.x = 0
        this.y = 0

        this.w = this.texture.width

        this.h = this.texture.height

    }
    static new(game, name) {
        var self = this
        var i = new self(game, name)
        return i
    }
    draw() {

    }
    update() {

    }
}

// class Player extends GuaImage{
//     constructor(game, name) {
//         super(game, name)
//         this.x = 100
//         this.y = 270
//     }
// }
