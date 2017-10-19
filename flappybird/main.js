
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
        bird1: 'img/bird.png',
        // bird2: 'img/bird2.png',
        // bird3: 'img/bird3.png',
        bg: 'img/background.png',
        pipetop: 'img/pipetop.png',
        pipebottom: 'img/pipebottom.png',
        land: 'img/land.png', 
    }

    var game = GuaGame.instance(30, images, function (g) {
        // var s = Scene.new(g)
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })
    enableDebugMode(game, true)


}
__main()
