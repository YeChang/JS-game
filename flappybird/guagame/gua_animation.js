class GuaAnimation {
    constructor(game) {
        this.game = game
        this.animations = {
            bird: [],
        }

        for (var i = 1; i < 4; i++) {
            var name = 'bird' + i.toString()
            log('name', name)
            var t = game.textureByName(name)
            this.animations['bird'].push(t)
        }
       
        this.animationName = 'bird'
        this.texture = this.frames()[0]
        this.w = this.texture.width
        this.h = this.texture.height
        this.x = 100
        this.y = 180
        this.frameIndex = 0
        this.frameCount = 3
        //
        this.flipX = false

        //重力和加速度
        this.gy = 10 
        this.vy = 10
    }
    static new(game) {
        return new this(game)
    }
    frames() {
        return this.animations[this.animationName]
    }
    update() {
        this.frameCount--
        if (this.frameCount == 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            this.texture = this.frames()[this.frameIndex]
        }
        //更新受力
        this.y += this.vy        
        this.vy += this.gy * 0.2
        if (this.y >= 390) {
            this.y = 390
        }
       
    }
    
    draw() {
        var context = this.game.context
        if (this.flipX) {
            context.save()
            // Set the origin to the center of the image

            var x = this.x + this.w/2
            context.translate(x, 0)
            context.scale(-1, 1)
            context.translate(-x, 0)

            // Draw the image
            context.drawImage(this.texture, this.x, this.y)
            context.restore()
        }else {
            context.drawImage(this.texture, this.x, this.y)
        }

    }
    move(x, keyStatus) {
        this.flipX = x < 0
        log('keyStatus', status)
        // var animationNames = {
        //     down: 'bird',//idle
        //     up: 'bird',//run
        // }
        // var name = animationNames[keystatus]
        // this.changeAnimation(name)
    
    
        this.x += x
    }
    jump() {
        this.vy = -10
    }
    changeAnimation(name) {
        this.animationName = name
    }
}
