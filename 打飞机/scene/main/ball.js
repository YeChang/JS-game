var Ball = function (game) {
    var o =  game.imageByName('ball')

    // var image = imageFromPath('ball.png')

    o.x = 100
    o.y = 50
    o.speedX = 6
    o.speedY = 6
    o.fired = false

    o.move = function () {
        if (o.fired) {
            // log('move')
            if (o.x < 0 || o.x > 400) {
                o.speedX *= -1
            }
            if (o.y < 0 || o.y >300) {
                o.speedY *= -1
            }
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    o.fire = function () {
        o.fired = true
    }
    o.rebound = function () {
        o.speedY *= -1
    }
    o.hasPoint = function (x, y) {
        var xIn = x >= o.x && x <= o.x + o.w
        var yIn = y >= o.y && y <= o.y + o.h
        return xIn && yIn

    }

    return o
}
