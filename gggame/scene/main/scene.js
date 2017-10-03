var Scene = function (game) {
    var s = {
        game: game,
    }
    //初始化
    var score = 0

    var paddle = Paddle(game)
    var ball = Ball(game)
    window.blocks = loadLevel(game, 1)

    game.registerAction('a', function(){
        paddle.moveLeft()
    })
    game.registerAction('d', function(){
        paddle.moveRight()
    })
    game.registerAction('f', function(){
        ball.fire()
    })
    // game.registerAction('k', function(){
    //     var s = Scene()
    //     game.replaceScene(s)
    // })


    s.draw = function () {
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
    s.update = function () {
        if (window.paused) {
            return
        }
        ball.move()
        //判断游戏结束
        if (ball.y > paddle.y) {
            //跳转到游戏结束场景
            var end = SceneEnd.new(game)
            game.replaceScene(end)

        }
        if (paddle.collide(ball)) {
            // log('pengzhuang')
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


        //mouse event
        var enabeDrag = false
        game.canvas.addEventListener('mousedown', function (event) {
            var x = event.offsetX
            var y = event.offsetY
            //检查是否点zhong了ball
            if (ball.hasPoint(x, y)) {
                // 设置一个拖拽状态
                enabeDrag = true
            }
        })
        game.canvas.addEventListener('mousemove', function (event) {
            var x = event.offsetX
            var y = event.offsetY

            if (enabeDrag) {
                log('move')
                ball.x = x
                ball.y = y
            }
        })
        game.canvas.addEventListener('mouseup', function (event) {
            var x = event.offsetX
            var y = event.offsetY
            enabeDrag = false
        })

    }
    return s
}
