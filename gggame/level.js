var levels = [
    [
        [0, 0,],
    ],
]
var numOflevel = 1
var addLevel = function () {
    var array = []
    for (var i = 0; i < window.blocks.length; i++) {
        var b = window.blocks[i]
        var p = b.getPosition()
        array.push(p)
        log('window.blocks.length',window.blocks.length)
    }
    // log('array', array)
    levels.push(array)
    log('levels', levels)
    log('numOflevel',numOflevel)
    log('window.blocks',window.blocks)
    numOflevel++
}
