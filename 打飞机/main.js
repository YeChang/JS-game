
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
        bullet: 'images/bullet.png',
        player: 'images/player.png',
        enemy0: 'images/enemy0.png',
        enemy1: 'images/enemy1.png',
        enemy2: 'images/enemy2.png',
        // enemy3: 'images/enemy3.png',
        fire: 'images/fire.png',
        sky: 'images/Background/starBackground.png',
        cloud: 'images/Background/cloud.png',
        //动画
        w1: 'images/walking/w1.png',
        w2: 'images/walking/w2.png',
        w3: 'images/walking/w3.png',
        w4: 'images/walking/w4.png',
        w5: 'images/walking/w5.png',
        w6: 'images/walking/w6.png',

    }

    var game = GuaGame.instance(30, images, function (g) {
        // var s = Scene.new(g)
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })
    enableDebugMode(game, true)


}
__main()
