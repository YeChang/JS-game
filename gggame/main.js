
var loadLevel = function (game, n) {
    n = n - 1
    let level = levels[n]
    var blocks = []

    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(game, p)
        blocks.push(b)
    }
    // log('blocks', blocks)
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
            window.blocks = loadLevel(game, Number(k))
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

    var game = GuaGame(images, function (g) {
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })
    enableDebugMode(game, true)


}
__main()
