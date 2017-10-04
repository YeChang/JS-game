const config = {
    player_speed: 10,
    bullet_speed: 5,
    cloud_speed: 1,
    enemy_speed: 5,
    fire_coolDown: 9,

}

class Player extends GuaImage {
    constructor(game) {
        super(game, 'player')
        this.setup()
    }
    setup() {
        this.speed = 10
        this.coolDown = 0
        this.x = 150
        this.y = 800
    }
    update() {
        this.speed = config.player_speed
        if (this.coolDown > 0) {
            this.coolDown --
        }

    }
    fire() {
        if (this.coolDown == 0) {
            this.coolDown = config.fire_coolDown
            var x = this.x + this.w / 2
            var y = this.y
            var b = Bullet.new(this.game)
            b.x = x
            b.y = y
            this.scene.addElement(b)
        }

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
