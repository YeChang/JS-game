
var loadLevel = function (game, n) {
    n = n - 1
    let level = levels[n]
    var blocks = []

    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(game, p)
        blocks.push(b)
    }
    log('blocks', blocks)
    return blocks
}
var blocks = []
var enableDebugMode = function (game, enable) {
    if(!enable){
        return
    }
    // debug mode
    window.paused = false
    window.addEventListener('keydown', function (event) {
        var k = event.key
        if (k == 'p') {
            //pause function
            paused = !paused
        } else if ('1234567'.includes(k)) {
            // 为了 debug 临时加的载入关卡功能
            blocks = loadLevel(game, Number(k))
        }
    })
    //control fps
    document.querySelector('#id-input-speed').addEventListener('input', function (event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}
var __main = function () {


    var images = {
        ball: 'images/ball.png',
        paddle: 'images/paddle.png',
        block: 'images/block.png',
    }


    var score = 0
    var game = GuaGame(images, function (g) {
        //debug mode
        enableDebugMode(game, true)

        var paddle = Paddle(game)
        var ball = Ball(game)
        blocks = loadLevel(game, 1)

        game.registerAction('a', function(){
            paddle.moveLeft()
        })
        game.registerAction('d', function(){
            paddle.moveRight()
        })
        game.registerAction('f', function(){
            ball.fire()
        })

        //game.update()
        game.update = function() {
            if (paused) {
                return
            }
            ball.move()

            if (paddle.collide(ball)) {
                log('pengzhuang')
                ball.rebound()

            }
            for (var i = 0; i < blocks.length; i++) {
                var block = blocks[i]
                if (block.collide(ball)) {
                    // log('block 相撞')
                    block.kill()
                    ball.rebound()
                    //update score
                    score += 100
                }
            }


        }
        //game.draw()
        game.draw = function () {
            //draw背景
            //draw label
            game.context.fillText('分数:' + score, 20, 280)
            game.context.fillStyle = '#554'
            game.context.fillRect(0, 0, 400, 300)

            game.drawImage(paddle)
            game.drawImage(ball)
            for (var i = 0; i < blocks.length; i++) {
                var block = blocks[i]

                if (block.alive) {
                    game.drawImage(block)
                }
            }
            //draw label
            game.context.fillText('分数:' + score, 20, 280)
        }

    })


}
__main()
