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
        this.game = game

        var bg = GuaImage.new(game, 'bg')
        this.addElement(bg)

        var bird = GuaAnimation.new(game)
        
        this.bird = bird
        this.addElement(bird)
        
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
        this.setupInputs()
    }

    update() {
        super.update()
        

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
    setupInputs() {
        var self = this
        self.game.registerAction('a', function (keyStatus) {
            self.bird.move(-2, keyStatus)
        })
        self.game.registerAction('d', function (keyStatus) {
            self.bird.move(2, keyStatus)
        })
        self.game.registerAction('j', function () {
            self.bird.jump()
        })
    }
}
