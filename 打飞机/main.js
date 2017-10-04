
// var loadLevel = function (game, n) {
//     n = n - 1
//     let l = Levels.instance()
//     let level = l.levels[n]
//     var blocks = []
//
//     for (var i = 0; i < level.length; i++) {
//         // log('leve',level)
//         var p = level[i]
//         var b = Block(game, p)
//         blocks.push(b)
//     }
//     // log('blocks', blocks)
//     return blocks
// }
// var blocks = []
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
        }
        // else if ('1234567'.includes(k)) {
        //     // 为了 debug 临时加的载入关卡功能
        //     window.blocks = loadLevel(game, Number(k))
        // }
    })
    //control fps
    document.querySelector('#id-input-speed').addEventListener('input', function (event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })

    //mouse event
    // game.canvas.addEventListener('mousedown',function (event) {
    //     var x = event.offsetX
    //     var y = event.offsetY
    //     // log('鼠标坐标:', x, y)
    //     // log('画一个block的坐标', x - (x % 40), y - (y % 19))
    //     var p = [x - (x % 40), y - (y % 19)]
    //     var b = Block(game, p)
    //     window.blocks.push(b)
    // })
    //用game.registerAction的话 每秒要调用addLevel 好多次。
    // window.addEventListener('keydown', event=>{
    //     if (event.key == 'q') {
    //         let l = Levels.instance()
    //         l.addLevel()
    //     }
    // })
    // game.registerAction('q',function () {
    //     window.fps = 1
    //     let l = Levels.instance()
    //     l.addLevel()
    //
    // })
}
var __main = function () {
    var images = {
        bullet: 'images/bullet.png',
        player: 'images/player.png',
        enemyUFO: 'images/enemyUFO.png',
        enemyShip: 'images/enemyShip.png',
        sky: 'images/Background/starBackground.png',
        cloud: 'images/Background/cloud.png'
    }

    var game = GuaGame.instance(30, images, function (g) {
        var s = Scene.new(g)
        g.runWithScene(s)
    })
    enableDebugMode(game, true)


}
__main()
