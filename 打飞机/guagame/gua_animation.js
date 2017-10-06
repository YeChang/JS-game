class GuaAnimation {
    constructor(game) {
        this.game = game
        this.frames = []
        for (var i = 1; i < 7; i++) {
            var name = 'w' + i.toString()
            log('name', name)
            var t = game.textureByName(name)
            this.frames.push(t)
        }
        this.texture = this.frames[0]
        this.frameIndex = 0
        this.frameCount = 5
    }
    static new(game) {
        return new this(game)
    }
    update() {
        this.frameCount--
        if (this.frameCount == 0) {
            this.frameCount = 5
            this.frameIndex = (this.frameIndex + 1) % this.frames.length
            this.texture = this.frames[this.frameIndex]
        }
    }
    draw() {
        this.game.drawImage(this)
    }
}
