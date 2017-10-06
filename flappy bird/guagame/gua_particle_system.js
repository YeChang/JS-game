class guaparticlesystem {
    constructor(game) {
        this.game = game
        this.setup()

    }
    static new(game) {
        return new this(game)
    }
    setup() {
        this.duration = 28
        // this.x = 150
        // this.y = 200
        this.numberOfParticels = 40
        this.particles = []
    }
    update() {
        this.duration--

        //添加小火花
        if (this.particles.length < this.numberOfParticels) {
            var p =GuaParticle.new(this.game)
            //init position
            var s= 3
            var vx = randomBetween(-s, s)
            var vy = randomBetween(-s, s)

            p.init(this.x, this.y, vx, vy)
            this.particles.push(p)
        }
        //更新所有的小火花
        for (var p  of this.particles) {
            p.update()
        }
        //delete dead fire
        this.particles = this.particles.filter(p => p.life > 0)
    }
    draw() {
        if (this.duration < 0) {
            //TODO , i should delete these particles in scene
            return
        }
        for (var p  of this.particles) {
            p.draw()
        }
    }
}
class GuaParticle extends GuaImage {
    constructor(game) {
        super(game, 'fire')
        this.setup()
    }
    setup() {
        this.life = 12
    }
    update() {
        this.life--
        this.x += this.vx
        this.y += this.vy
        var factor = 0.02
        this.vx += factor * this.vx
        this.vy += factor * this.vy

    }

    init(x, y, vx, vy) {
        this.x = x
        this.vx = vx
        this.y = y
        this.vy = vy
    }

}
