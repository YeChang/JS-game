const config = {
    bird_speed: 10,

}

class Bird extends GuaImage {
    constructor(game) {
        super(game, 'bird')
        this.setup()
    }
    setup() {
        this.speed = 10
        this.x = 0
        this.y = 10
    }
    update() {
        this.speed = config.bird_speed
    }
    fire() {

    }
    draw() {
        this.game.drawImage(this)
    }
    jump() {
        this.y -= 20
    }
    moveLeft() {
        if (this.x < 0) {
            this.x = this.x
        }else {
            this.x -= this.speed

        }
      }
    moveRight() {
        if (this.x > 500 - this.w) {
            this.x = this.x
        }else {
            this.x += this.speed
        }
    }
    moveUp() {
        if (this.y < 0) {
            this.y = this.y
        }else {
            this.y -= this.speed

        }
    }
    moveDown() {
        if (this.y > 900 - this.h) {
            this.y = this.y
        }else {
            this.y += this.speed

        }
    }
}
