const randomBetween = function (start, end) {
    var n = Math.random() * (end - start + 1 )
    return Math.floor(n + start)
}
class Enemy extends GuaImage {
    constructor(game) {
        var type = randomBetween(0, 3)
        var name = 'enemy' + type
        super(game, name)

        this.setup()
    }
    setup() {
        this.x = randomBetween(0, 440)
        this.y = -randomBetween(0, 100)
        this.speed = randomBetween(2, 5)
    }
    update() {
        this.y += this.speed
        if(this.y > 900) {
            this.setup()
        }
    }
}
