var Ball = function () {
    var image = imageFromPath('ball.png')
    var o = {
        img: image,
        x: 100,
        y: 50,
        speedX: 6,
        speedY: 6,
        fired: false,
    }
    o.move = function () {
        if (o.fired) {
            // log('move')
            if (o.x < 0 || (o.x + o.img.width) > 400) {
                o.speedX *= -1
            }
            if (o.y < 0 || (o.y + o.img.height) >300) {
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


    return o
}
