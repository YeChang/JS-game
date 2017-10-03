class GuaGame {
    constructor(fps, images, runCallBack) {
        window.fps = fps
        this.images = images
        this.runCallBack = runCallBack
        //
        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')

        window.addEventListener('keydown', event=>{
            this.keydowns[event.key] = true
        })
        var self = this//jiu yu fa
        window.addEventListener('keyup', function(event) {
            self.keydowns[event.key] = false
        })
        this.init()
    }
    //单粒性
    static instance(...args) {
        this.i = this. i || new this(...args)
        return this.i
    }
    drawImage(img) {
        this.context.drawImage(img.image, img.x, img.y)
    }
    update() {
        this.scene.update()
    }
    //draw
    draw() {
        this.scene.draw()
    }
    registerAction(key, callback) {
        this.actions[key] = callback
    }
    runloop() {
        log(window.fps)
        //envents
        var self = this
        var actions = Object.keys(this.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if(this.keydowns[key]) {
                //如果按键被按下， 调用注册用的action
                this.actions[key]()
            }
        }
        //update
        this.update()

        //clear
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        //draw
        this.draw()
        //next run loop
        setTimeout(function(){
            self.runloop()
        }, 1000/window.fps)
    }
    init() {
        var loads = []
        //预先载入所有图片
        var g = this
        var names = Object.keys(g.images)
        for (var i = 0; i < names.length; i++) {
            let name = names[i]
            let path = g.images[name]
            let img = new Image()
            img.src = path
            img.onload = function () {
                //存入g.images中

                g.images[name] = img

                //所有图片载入成功之后调用run
                loads.push(1)
                if (loads.length == names.length) {
                    g.__start()
                }
            }
        }
    }
    imageByName(name) {

        var img = this.images[name]
        var image = {
            w: img.width,
            h: img.height,
            image: img,
        }
        return image
    }
    runWithScene(scene) {
        this.scene = scene
        var self = this
        setTimeout(function(){
            self.runloop()
        }, 1000/window.fps)
    }
    replaceScene(scene) {
        this.scene = scene
    }
    __start(scene) {
        //开始运行程序
        this.runCallBack(this)

    }
}
// var GuaGame = function (images, runCallBack) {
//     //images 是一个对象， 里面是图片的引用名字和图片路径
//
//     //程序会在所有图片载入成功后才运行
//     var g = {
//         scene: null,
//         actions: {},
//         keydowns: {},
//         images: {},
//     }
//     var canvas = document.querySelector('#id-canvas')
//     var context = canvas.getContext('2d')
//     g.canvas = canvas
//     g.context = context
//     //draw
//     g.drawImage = function(GuaImage) {
//         g.context.drawImage(GuaImage.image, GuaImage.x, GuaImage.y)
//     }
//     //envents
//     window.addEventListener('keydown', function(event) {
//         g.keydowns[event.key] = true
//     })
//     window.addEventListener('keyup', function(event) {
//         g.keydowns[event.key] = false
//     })
//     //update
//     g.update = function () {
//         g.scene.update()
//     }
//     //draw
//     g.draw = function () {
//         g.scene.draw()
//     }
//     g.registerAction = function (key, callback){
//         g.actions[key] = callback
//     }
//     // timer
//     window.fps = 30
//     var runloop = function () {
//         //envents
//         var actions = Object.keys(g.actions)
//         for (var i = 0; i < actions.length; i++) {
//             var key = actions[i]
//             if(g.keydowns[key]) {
//                 //如果按键被按下， 调用注册用的action
//                 g.actions[key]()
//             }
//         }
//         //update
//         g.update()
//
//         //clear
//         context.clearRect(0, 0, canvas.width, canvas.height)
//         //draw
//         g.draw()
//         //next run loop
//         setTimeout(function(){
//             runloop()
//         }, 1000/window.fps)
//     }
//     //
//     var loads = []
//     //预先载入所有图片
//     var names = Object.keys(images)
//     for (var i = 0; i < names.length; i++) {
//         let name = names[i]
//         var path = images[name]
//         let img = new Image()
//         img.src = path
//         img.onload = function () {
//             //存入g.images中
//             g.images[name] = img
//             //所有图片载入成功之后调用run
//             loads.push(1)
//             if (loads.length == names.length) {
//                 g.__start()
//             }
//         }
//     }
//     g.imageByName = function (name) {
//
//         var img = g.images[name]
//         var image = {
//             w: img.width,
//             h: img.height,
//             image: img,
//         }
//         return image
//     }
//     g.runWithScene = function (scene) {
//         g.scene = scene
//
//         setTimeout(function(){
//             runloop()
//         }, 1000/window.fps)
//     }
//     g.replaceScene = function (scene) {
//         g.scene = scene
//     }
//     g.__start = function (scene) {
//         //开始运行程序
//         runCallBack(g)
//
//     }
//
//
//     return g
// }
