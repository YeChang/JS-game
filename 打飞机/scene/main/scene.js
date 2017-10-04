class Scene extends GuaScene {
    constructor(game) {
        super(game)
        //初始化
        this.setup()
        this.setupInputs()
    }
    setup() {
        this.numberOfEnemies = 10
        this.bg = GuaImage.new(this.game, 'sky')
        this.player = Player.new(this.game)
        // this.player = GuaImage.new(this.game, 'player')
        this.cloud = GuaImage.new(this.game, 'cloud')
        this.cloud2 = GuaImage.new(this.game, 'cloud')
        this.cloud2.x = 240
        this.cloud2.y = 240
        log('this.bg', this.cloud)

        //先画背景
        this.addElement(this.bg)
        this.addElement(this.player)
        this.addElement(this.cloud)
        this.addElement(this.cloud2)
        //
        this.addEnemies()


    }

    addEnemies() {
        var es = []
        for (var i = 0; i < this.numberOfEnemies; i++) {
            var e = Enemy.new(this.game)
            es.push(e)
            this.addElement(e)
        }
        this.enemies = es
    }
    setupInputs() {
        var game = this.game
        var s = this
        game.registerAction('s', function(){
            s.player.moveDown()
        })
        game.registerAction('w', function(){
            s.player.moveUp()
        })
        game.registerAction('a', function(){
            s.player.moveLeft()
        })
        game.registerAction('d', function(){
            s.player.moveRight()
        })
        game.registerAction('j', function(){
            s.player.fire()
            log('fire', s.player.fire())
        })
    }
    update() {
        super.update()
        this.cloud.y += 1
        this.cloud2.y += 1
    }
}

// var Scene = function (game) {
//     var s = {
//         game: game,
//     }
//     //初始化
//     var score = 0
//
//     var paddle = Paddle(game)
//     var ball = Ball(game)
//     window.blocks = loadLevel(game, 1)
//
//
//
//     // game.registerAction('k', function(){
//     //     var s = Scene()
//     //     game.replaceScene(s)
//     // })
//
//
//     s.draw = function () {
//         //draw背景
//         //draw label
//         game.context.fillText('分数:' + score, 20, 280)
//         game.context.fillStyle = '#554'
//         game.context.fillRect(0, 0, 400, 380)
//
//         game.drawImage(paddle)
//         game.drawImage(ball)
//         for (var i = 0; i < window.blocks.length; i++) {
//             var block = blocks[i]
//             if (block.alive) {
//                 game.drawImage(block)
//             }
//         }
//         //draw label
//         game.context.fillText('分数:' + score, 20, 280)
//     }
//     s.update = function () {
//         if (window.paused) {
//             return
//         }
//         ball.move()
//         //判断游戏结束
//         if (ball.y > paddle.y) {
//             //跳转到游戏结束场景
//             var end = SceneEnd.new(game)
//             game.replaceScene(end)
//
//         }
//         if (paddle.collide(ball)) {
//             // log('pengzhuang')
//             ball.rebound()
//
//         }
//         for (var i = 0; i < blocks.length; i++) {
//             var block = blocks[i]
//             if (block.collide(ball)) {
//                 // log('block 相撞')
//                 block.kill()
//                 ball.rebound()
//                 //update score
//                 score += 100
//             }
//         }
//
//
//         //mouse event
//         var enabeDrag = false
//         game.canvas.addEventListener('mousedown', function (event) {
//             var x = event.offsetX
//             var y = event.offsetY
//             //检查是否点zhong了ball
//             // log('鼠标坐标:', x, y)
//             if (ball.hasPoint(x, y)) {
//                 // 设置一个拖拽状态
//                 enabeDrag = true
//             }
//         })
//         game.canvas.addEventListener('mousemove', function (event) {
//             var x = event.offsetX
//             var y = event.offsetY
//
//             if (enabeDrag) {
//                 // log('move')
//                 ball.x = x
//                 ball.y = y
//             }
//         })
//         game.canvas.addEventListener('mouseup', function (event) {
//             var x = event.offsetX
//             var y = event.offsetY
//             enabeDrag = false
//         })
//
//     }
//     return s
// }
