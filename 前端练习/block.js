var Block = function (position) {
    //position 是 [0, 0] 格式
    var p = position
    var image = imageFromPath('block.png')
    var o = {
        img: image,
        x: p[0],
        y: p[1],
        w: 50,
        h: 20,
        alive: true,
        hp: p[2] || 1
    }
    o.kill = function () {
        o.hp--
        if (o.hp < 1) {
            o.alive = false
        }
    }
    o.collide = function (b) {
        return o.alive && ((aInb(o, b) || aInb(b, o)))
    }
    return o
}
