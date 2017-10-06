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
        //初始化
        var label = GuaLabel.new(game, 'hello guagua')
        this.addElement(label)

        // game.registerAction('k', function(){
        //     var s = Scene.new(game)
        //     game.replaceScene(s)
        // })
        var w = GuaAnimation.new(game)
        w.x = 100
        w.y = 200
        this.w = w
        this.addElement(w)
        this.setupInputs()
    }
    setupInputs() {
        var self = this
        this.game.registerAction('a', function (keyStatus) {
            self.w.move(-5, keyStatus)
        })
        this.game.registerAction('d', function (keyStatus) {
            self.w.move(5, keyStatus)
        })
    }
    draw() {
        super.draw()
        // //draw label
        // this.game.context.fillText('按k开始游戏', 20, 280)
    }

}
