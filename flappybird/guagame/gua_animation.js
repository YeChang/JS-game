// class GuaAnimation {
//     constructor(game) {
//         this.game = game
//         this.animations = {
//             idle: [],
//             run: [],
//         }
//         for (var i = 1; i < 7; i++) {
//             var name = 'run' + i.toString()
//             log('name', name)
//             var t = game.textureByName(name)
//             this.animations['run'].push(t)
//         }
//         for (var i = 1; i < 7; i++) {
//             var name = 'idle' + i.toString()
//             log('name', name)
//             var t = game.textureByName(name)
//             this.animations['idle'].push(t)
//         }
//         this.animationName = 'idle'
//         this.texture = this.frames()[0]
//         this.w = this.texture.width
//         this.h = this.texture.height
//         this.frameIndex = 0
//         this.frameCount = 5
//         //
//         this.flipX = false
//     }
//     static new(game) {
//         return new this(game)
//     }
//     frames() {
//         retrurn this.animations[this.animationName]
//     }
//     update() {
//         this.frameCount--
//         if (this.frameCount == 0) {
//             this.frameCount = 5
//             this.frameIndex = (this.frameIndex + 1) % this.frames().length
//             this.texture = this.frames()[this.frameIndex]
//         }
//     }
//     draw() {
//         context = this.game.context
//         if (this.flipX) {
//             context.save()
//             // Set the origin to the center of the image
//
//             var x = this.x + this.w/2
//             context.translate(x, 0)
//             context.scale(-1, 1)
//             context.translate(-x, 0)
//
//             // Draw the image
//             context.drawImage(this.texture, this.x, this.y)
//             context.restore()
//         }else {
//             context.drawImage(this.texture, this.x, this.y)
//         }
//
//     }
//     move(x, keyStatus) {
//         this.flipX = x < 0
//         log('keyStatus', status)
//         var animationNames = {
//             down: 'run',
//             up: 'idle',
//         }
//         var name = animationNames[keystatus]
//         this.changeAnimation(name)
//
//
//         this.x += x
//     }
//     changeAnimation(name) {
//         this.animationName = name
//     }
// }
