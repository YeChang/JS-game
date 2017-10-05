class Bullet extends GuaImage {
    constructor(game) {
        super(game, 'bullet')
        this.setup()

    }
    setup() {
        this.speed = config.bullet_speed
        // this.speed = 7
        this.hp = 1
    }
    update() {
        if (this.scene.numberOfCurrentEnemies < 3) {
            this.scene.addEnemies()
        }
        this.collide()
        this.y -= this.speed
    }
    collide() {
        for (var i = 0; i < this.scene.elements.length; i++) {
            if (this.scene.elements[i] instanceof Enemy) {
                let e = this.scene.elements[i]
                if (this.y >e.y && this.y < e.y + e.h) {
                    if (this.x > e.x && this.x < e.x + e.w ) {
                        log('collide')
                        this.hp--
                        e.hp--
                        if (e.hp < 0) {
                            var ps = guaparticlesystem.new(this.game)
                            ps.x = this.x
                            ps.y = this.y
                            this.scene.addElement(ps)
                            this.scene.elements.splice(i , 1)
                            this.scene.numberOfCurrentEnemies--
                        }
                    }
                }
            }

            // log('e', e)

        }

    }

    draw() {
        if (this.hp < 0) {
            for (var i = 0; i < this.scene.elements.length; i++) {
                if (this.scene.elements[i] instanceof Bullet) {
                    this.scene.elements.splice(i , 1)
                }
            }
        }
        this.game.drawImage(this)
    }
}
