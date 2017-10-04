// class Block {
//     constructor(game, position) {
//         this.p = position
//         this.img = game.imageByName('block')
//         this.o = {
//             // img: image,
//             x: this.p[0],
//             y: this.p[1],
//             alive: true,
//             hp: this.p[2] || 1
//         }
//
//     }
//     getPosition() {
//         return this.p
//     }
//     this.o.image = this.img.image
//     this.o.w = this.img.w
//     this.o.h = this.img.h
//     kill() {
//         this.o.hp--
//         if (this.o.hp < 1) {
//             this.o.alive = false
//         }
//     }
//     collide(b) {
//         return this.o.alive && ((aInb(this.o, b) || aInb(b, this.o)))
//     }
// }
var Block = function (game, position) {
    //position 是 [0, 0] 格式
    var p = position
    var img =  game.imageByName('block')
    var o = {
        // img: image,
        x: p[0],
        y: p[1],
        // w: 50,
        // h: 20,
        alive: true,
        hp: p[2] || 1
    }
    o.getPosition = function () {
        return p
    }
    o.image = img.image
    o.w = img.w
    o.h = img.h
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
