class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        //初始化
        game.registerAction('r', function(){
            var s = SceneTitle.new(game)
            game.replaceScene(s)
        })
    }

    draw() {
        //draw label
        this.game.context.fillText('游戏结束:按r返回标题界面', 20, 280)
    }

}
