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

        var w = GuaAnimation.new(game)
        w.x = 100
        w.y = 180
        this.w = w
        this.addElement(w)
        
        // this.bird = Bird.new(game)
        // this.addElement(this.bird)
        // loop the moving land
        this.grounds = []
        this.skipCount = 7
        for (var i = 0; i < 20; i++) {
            var g = GuaImage.new(game, 'land')
            g.x = i * 40
            g.y = 430
            this.addElement(g)
            this.grounds.push(g)
        }
        // this.setupInputs()
    }
    // setupInputs() {
    //     var game = this.game
    //     var self = this
    //     game.registerAction('s', function(){
    //         self.bird.moveDown()
    //     })
    //     game.registerAction('w', function(){
    //         self.bird.moveUp()
    //     })
    //     game.registerAction('a', function(){
    //         self.bird.moveLeft()
    //     })
    //     game.registerAction('d', function(){
    //         self.bird.moveRight()
    //     })
    //     game.registerAction(' ', function(){
    //         self.bird.jump()
    //     })
    // }
    update() {
        super.update()
        //
        var vx = 2
        // if (this.bird.y > 420) {
        //     this.bird.y = 400
        // }
        // this.bird.y += 10

        this.skipCount--
        var offset = -5
        if (this.skipCount == 0) {
            this.skipCount = 7
            offset = 30
        }
        // log('bird.x', this.elements[0].x)
        for (var i = 0; i < this.grounds.length; i++) {
            var g = this.grounds[i]
            g.x += offset

        }

    }
    draw() {
        super.draw()
        // //draw label
        // this.game.context.fillText('按k开始游戏', 20, 280)
    }

}
