class GuaLabel {
    constructor(game, text) {
        this.game = game
        this.text = text
    }
    static new(game, text) {
        return new this(game, text)
    }
    draw() {
        this.game.context.fillText(this.text, 20, 280)
    }
    update() {

    }
}
class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        var bg = GuaImage.new(game, 'bg')
        this.addElement(bg)
        //loop the moving land
        this.grounds = []
        for (var i = 0; i < 30; i++) {
            var g = GuaImage.new(game, 'land')
            g.x = i * 19
            g.y = 410
            this.addElement(g)
            this.grounds.push(g)
        }
    }
    update() {
        super.update()
        //
        for (var i = 0; this.grounds < 10; i++) {
            var g = this.grounds[i]
            g.x -= 5

        }

    }
    draw() {
        super.draw()
        // //draw label
        // this.game.context.fillText('按k开始游戏', 20, 280)
    }

}
