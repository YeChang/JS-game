var SceneEnd = function (game) {
    var s = {
        game: game,
    }
    //初始化

    s.draw = function () {

        //draw label
        game.context.fillText('游戏结束:按k重新开始游戏', 20, 280)
    }
    s.update = function () {

    }
    return s
}
