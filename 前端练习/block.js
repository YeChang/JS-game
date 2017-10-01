var Block = function () {
    var image = imageFromPath('block.png')
    var o = {
        img: image,
        x: 20,
        y: 20,
        w: 50,
        h: 20,
        lifes: true,
    }
    o.kill = function () {
        o.lifes = false
    }
    o.collide = function (b) {
        return o.lifes && ((aInb(o, b) || aInb(b, o)))
    }
    return o
}
