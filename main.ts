namespace SpriteKind {
    export const Building = SpriteKind.create()
    export const worker = SpriteKind.create()
    export const buildings = SpriteKind.create()
}
info.player1.onScore(1, function () {
    info.stopCountdown()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    loom_workers = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . e e e . e e e e e e . e e e . 
        . f d f . e 7 7 7 7 e . f d f . 
        . d d d . e 2 2 2 2 e . d d d . 
        f 6 6 6 f e 4 4 4 4 e f 6 6 6 f 
        . . 6 . . e 9 9 9 9 e . . 6 . . 
        . f f f . e e e e e e . f f f . 
        . f . f . e . . . . e . f . f . 
        . . . . . . . . . . . . . . . . 
        . e e e . e e e e e e . e e e . 
        . f d f . e 7 7 7 7 e . f d f . 
        . d d d . e 2 2 2 2 e . d d d . 
        f 6 6 6 f e 4 4 4 4 e f 6 6 6 f 
        . . 6 . . e 9 9 9 9 e . . 6 . . 
        . f f f . e e e e e e . f f f . 
        . f . f . e . . . . e . f . f . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    loom_workers,
    [img`
        . . . . . . . . . . . . . . . . 
        . e e e . e e e e e e . e e e . 
        . f d f . e 7 7 7 7 e . f d f . 
        . d d d . e 2 2 2 2 e . d d d . 
        f 6 6 6 f e 4 4 4 4 e f 6 6 6 f 
        . . 6 . . e 9 9 9 9 e . . 6 . . 
        . f f f . e e e e e e . f f f . 
        . f . f . e . . . . e . f . f . 
        . . . . . . . . . . . . . . . . 
        . e e e . e e e e e e . e e e . 
        . f d f . e 7 7 7 7 e . f d f . 
        . d d d . e 2 2 2 2 e . d d d . 
        f 6 6 6 f e 4 4 4 4 e f 6 6 6 f 
        . . 6 . . e 9 9 9 9 e . . 6 . . 
        . f f f . e e e e e e . f f f . 
        . f . f . e . . . . e . f . f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . e e e e e e e e e e e e . . 
        . . f d f e e 7 7 e e f d f . . 
        . . d d d e e 2 2 e e d d d . . 
        . f 6 6 6 f e 4 4 e f 6 6 6 f . 
        . . . 6 . e e 9 9 e e . 6 . . . 
        . . f f f e e e e e e f f f . . 
        . . f . f e . . . . e f . f . . 
        . . . . . . . . . . . . . . . . 
        . . e e e e e e e e e e e e . . 
        . . f d f e e 7 7 e e f d f . . 
        . . d d d e e 2 2 e e d d d . . 
        . f 6 6 6 f e 4 4 e f 6 6 6 f . 
        . . . 6 . e e 9 9 e e . 6 . . . 
        . . f f f e e e e e e f f f . . 
        . . f . f e . . . . e f . f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . e e e e e e e e e e . . . 
        . . . f d f 7 e e 7 f d f . . . 
        . . . d d d 2 e e 2 d d d . . . 
        . . f 6 6 6 f e e f 6 6 6 f . . 
        . . . . 6 e 9 e e 9 e 6 . . . . 
        . . . f f f e e e e f f f . . . 
        . . . f . f . . . . f . f . . . 
        . . . . . . . . . . . . . . . . 
        . . . e e e e e e e e e e . . . 
        . . . f d f 7 e e 7 f d f . . . 
        . . . d d d 2 e e 2 d d d . . . 
        . . f 6 6 6 f e e f 6 6 6 f . . 
        . . . . 6 e 9 e e 9 e 6 . . . . 
        . . . f f f e e e e f f f . . . 
        . . . f . f . . . . f . f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . e e e e e e e e e e e e . . 
        . . f d f e e 7 7 e e f d f . . 
        . . d d d e e 2 2 e e d d d . . 
        . f 6 6 6 f e 4 4 e f 6 6 6 f . 
        . . . 6 . e e 9 9 e e . 6 . . . 
        . . f f f e e e e e e f f f . . 
        . . f . f e . . . . e f . f . . 
        . . . . . . . . . . . . . . . . 
        . . e e e e e e e e e e e e . . 
        . . f d f e e 7 7 e e f d f . . 
        . . d d d e e 2 2 e e d d d . . 
        . f 6 6 6 f e 4 4 e f 6 6 6 f . 
        . . . 6 . e e 9 9 e e . 6 . . . 
        . . f f f e e e e e e f f f . . 
        . . f . f e . . . . e f . f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . e e e . e e e e e e . e e e . 
        . f d f . e 7 7 7 7 e . f d f . 
        . d d d . e 2 2 2 2 e . d d d . 
        f 6 6 6 f e 4 4 4 4 e f 6 6 6 f 
        . . 6 . . e 9 9 9 9 e . . 6 . . 
        . f f f . e e e e e e . f f f . 
        . f . f . e . . . . e . f . f . 
        . . . . . . . . . . . . . . . . 
        . e e e . e e e e e e . e e e . 
        . f d f . e 7 7 7 7 e . f d f . 
        . d d d . e 2 2 2 2 e . d d d . 
        f 6 6 6 f e 4 4 4 4 e f 6 6 6 f 
        . . 6 . . e 9 9 9 9 e . . 6 . . 
        . f f f . e e e e e e . f f f . 
        . f . f . e . . . . e . f . f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . e e e . e e e e e e . e e e . 
        . f d f . e 7 2 4 9 e . f d f . 
        . d d d . e 2 7 2 4 e . d d d . 
        f 6 6 6 f e 4 2 7 2 e f 6 6 6 f 
        . . 6 . . e 9 4 2 7 e . . 6 . . 
        . f f f . e e e e e e . f f f . 
        . f . f . e . . . . e . f . f . 
        . . . . . . . . . . . . . . . . 
        . e e e . e e e e e e . e e e . 
        . f d f . e 7 2 4 9 e . f d f . 
        . d d d . e 2 7 2 4 e . d d d . 
        f 6 6 6 f e 4 2 7 2 e f 6 6 6 f 
        . . 6 . . e 9 4 2 7 e . . 6 . . 
        . f f f . e e e e e e . f f f . 
        . f . f . e . . . . e . f . f . 
        `],
    200,
    true
    )
    loom_workers.x = 50
    loom_workers.y = 10
    tiles.setCurrentTilemap(tilemap`level6`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    many_loom_workers()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        animation.runImageAnimation(
        worker,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . e e e . e e e e e e . . 
            . . . . f d f . e 7 7 7 7 e . . 
            . . . . d d d . e 2 2 2 2 e . . 
            . . . f 6 6 6 f e 4 4 4 4 e . . 
            . . . . . 6 . . e 9 9 9 9 e . . 
            . . . . f f f . e e e e e e . . 
            . . . . f . f . e . . . . e . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . e e e e e e e e e . . 
            . . . . . f d f e e 7 7 7 e . . 
            . . . . . d d d e e 2 2 2 e . . 
            . . . . f 6 6 6 f e 4 4 4 e . . 
            . . . . . . 6 . e e 9 9 9 e . . 
            . . . . . f f f e e e e e e . . 
            . . . . . f . f e . . . . e . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e e e e e e . . 
            . . . . . . f d f 7 e 7 7 e . . 
            . . . . . . d d d 2 e 2 2 e . . 
            . . . . . f 6 6 6 f e 4 4 e . . 
            . . . . . . . 6 e 9 e 9 9 e . . 
            . . . . . . f f f e e e e e . . 
            . . . . . . f . f . . . . e . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . e e e e e e e . . 
            . . . . . . . f d f 7 e 7 e . . 
            . . . . . . . d d d 2 e 2 e . . 
            . . . . . . f 6 6 6 f e 4 e . . 
            . . . . . . . . 6 9 9 e 9 e . . 
            . . . . . . . f f f e e e e . . 
            . . . . . . . f e f . . . e . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . e e e e e e . . 
            . . . . . . . . f d f 7 e e . . 
            . . . . . . . . d d d 2 e e . . 
            . . . . . . . f 6 6 6 f e e . . 
            . . . . . . . . e 6 9 9 e e . . 
            . . . . . . . . f f f e e e . . 
            . . . . . . . . f . f . . e . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . e e e e e e e . . 
            . . . . . . . f d f 7 e 7 e . . 
            . . . . . . . d d d 2 e 2 e . . 
            . . . . . . f 6 6 6 f e 4 e . . 
            . . . . . . . . 6 9 9 e 9 e . . 
            . . . . . . . f f f e e e e . . 
            . . . . . . . f e f . . . e . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e e e e e e . . 
            . . . . . . f d f 7 e 7 7 e . . 
            . . . . . . d d d 2 e 2 2 e . . 
            . . . . . f 6 6 6 f e 4 4 e . . 
            . . . . . . . 6 e 9 e 9 9 e . . 
            . . . . . . f f f e e e e e . . 
            . . . . . . f . f . . . . e . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . e e e e e e e e e . . 
            . . . . . f d f e e 7 7 7 e . . 
            . . . . . d d d e e 2 2 2 e . . 
            . . . . f 6 6 6 f e 4 4 4 e . . 
            . . . . . . 6 . e e 9 9 9 e . . 
            . . . . . f f f e e e e e e . . 
            . . . . . f . f e . . . . e . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . e e e . e e e e e e . . 
            . . . . f d f . e 7 7 7 7 e . . 
            . . . . d d d . e 2 2 2 2 e . . 
            . . . f 6 6 6 f e 4 4 4 4 e . . 
            . . . . . 6 . . e 9 9 9 9 e . . 
            . . . . f f f . e e e e e e . . 
            . . . . f . f . e . . . . e . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . e e e . e e e e e e . . 
            . . . . f d f . e 7 2 4 9 e . . 
            . . . . d d d . e 2 7 2 4 e . . 
            . . . f 6 6 6 f e 4 2 7 2 e . . 
            . . . . . 6 . . e 9 4 2 7 e . . 
            . . . . f f f . e e e e e e . . 
            . . . . f . f . e . . . . e . . 
            `],
        200,
        false
        )
        info.changeScoreBy(1)
        pause(2000)
    } else if (false) {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    scene.cameraShake(3, 5000)
    tiles.setCurrentTilemap(tilemap`level11`)
})
info.onCountdownEnd(function () {
    pause(1000)
    game.showLongText("you went into debt and the police found you", DialogLayout.Bottom)
    pause(1000)
    game.gameOver(false)
})
info.onScore(10000, function () {
    tiles.setCurrentTilemap(tilemap`level13`)
    game.gameOver(true)
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    many_Factory()
})
function Matirials () {
    timer.after(60000, function () {
        for (let index = 0; index < 1000; index++) {
            game.showLongText("You need more materials so you bought some", DialogLayout.Top)
            info.changeScoreBy(-40)
            pause(30000)
        }
    })
}
info.player1.onScore(2, function () {
    info.stopCountdown()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    scene.cameraShake(3, 5000)
    tiles.setCurrentTilemap(tilemap`level18`)
})
function many_Factory () {
    factory_clump = sprites.create(assets.image`Factory clump`, SpriteKind.buildings)
    factory_clump.x = 40
    factory_clump.y = 30
    animation.runImageAnimation(
    factory_clump,
    [img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        ffffffffffffffffffffffffffffffff
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        ffffffffffffffffffffffffffffffff
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        feefffeeeeeeeeeffeefffeeeeeeeeef
        feebfbeeeeeeeeeffeebfbeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        ffffffffffffffffffffffffffffffff
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        feefffeeeeeeeeeffeefffeeeeeeeeef
        feebfbeeeeeeeeeffeebfbeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        ffffffffffffffffffffffffffffffff
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        feebfbeeeeeeeeeffeebfbeeeeeeeeef
        feefffeeeeeeeeeffeefffeeeeeeeeef
        feebfbeeeeeeeeeffeebfbeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        ffffffffffffffffffffffffffffffff
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        feebfbeeeeeeeeeffeebfbeeeeeeeeef
        feefffeeeeeeeeeffeefffeeeeeeeeef
        feebfbeeeeeeeeeffeebfbeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        ffffffffffffffffffffffffffffffff
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .....ffff..feeef.....ffff..feeef
        ffffffeeffffeeefffffffeeffffeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        feebfbeeeeeeeeeffeebfbeeeeeeeeef
        feefffeeeeeeeeeffeefffeeeeeeeeef
        feebfbeeeeeeeeeffeebfbeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        ffffffffffffffffffffffffffffffff
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .....ffff..feeef.....ffff..feeef
        ffffffeeffffeeefffffffeeffffeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        feebfbeeeeeeeeeffeebfbeeeeeeeeef
        feefffeeeeeeeeeffeefffeeeeeeeeef
        feebfbeeeeeeeeeffeebfbeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        ffffffffffffffffffffffffffffffff
        `,img`
        ............b................bb.
        ..............b...............b.
        ............bb..............b...
        ...........fffff...........fffff
        ...........fefef...........fefef
        ...........fefef...........fefef
        .....ffff..feeef.....ffff..feeef
        ffffffeeffffeeefffffffeeffffeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        feebfbeeeeeeeeeffeebfbeeeeeeeeef
        feefffeeeeeeeeeffeefffeeeeeeeeef
        feebfbeeeeeeeeeffeebfbeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        ffffffffffffffffffffffffffffffff
        .............................bb.
        ...........bb.b.............b...
        .............b...............b..
        ...........fffff...........fffff
        ...........fefef...........fefef
        ...........fefef...........fefef
        .....ffff..feeef.....ffff..feeef
        ffffffeeffffeeefffffffeeffffeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        feebfbeeeeeeeeeffeebfbeeeeeeeeef
        feefffeeeeeeeeeffeefffeeeeeeeeef
        feebfbeeeeeeeeeffeebfbeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeffeeeeeeeeeeeeeef
        ffffffffffffffffffffffffffffffff
        `],
    500,
    false
    )
    scene.cameraShake(6, 2500)
    info.changeScoreBy(-1250)
    for (let index = 0; index < 10000000000000; index++) {
        info.changeScoreBy(45)
        pause(2000)
    }
}
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    scene.cameraShake(3, 5000)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . b b . . 
        . . . . . . . . . . . . . b b . 
        . . . . . . . . . . . f f f f f 
        . . . . . . . . . . . f e f e f 
        . . . . . . . . . . . f e f e f 
        . . . . . . . . . . . f e e e f 
        . . . . . f f f f . . f e e e f 
        f f f f f f e e f f f f e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e b f b e e e e e e e e e f 
        f e e f f f e e e e e e e e e f 
        f e e b f b e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.Building)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f e e b f b e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f f f f f f f f f f f f f f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f e e f f f e e e e e e e e e f 
        f e e b f b e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f f f f f f f f f f f f f f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e b f b e e e e e e e e e f 
        f e e f f f e e e e e e e e e f 
        f e e b f b e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f f f f f f f f f f f f f f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f e e e f 
        . . . . . f f f f . . f e e e f 
        f f f f f f e e f f f f e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e b f b e e e e e e e e e f 
        f e e f f f e e e e e e e e e f 
        f e e b f b e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f f f f f f f f f f f f f f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f f f f f 
        . . . . . . . . . . . f e f e f 
        . . . . . . . . . . . f e f e f 
        . . . . . . . . . . . f e e e f 
        . . . . . f f f f . . f e e e f 
        f f f f f f e e f f f f e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e b f b e e e e e e e e e f 
        f e e f f f e e e e e e e e e f 
        f e e b f b e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f f f f f f f f f f f f f f f f 
        `,img`
        . . . . . . . . . . . . b b . . 
        . . . . . . . . . . . . . b b . 
        . . . . . . . . . . . f f f f f 
        . . . . . . . . . . . f e f e f 
        . . . . . . . . . . . f e f e f 
        . . . . . . . . . . . f e e e f 
        . . . . . f f f f . . f e e e f 
        f f f f f f e e f f f f e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e b f b e e e e e e e e e f 
        f e e f f f e e e e e e e e e f 
        f e e b f b e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f f f f f f f f f f f f f f f f 
        `],
    750,
    false
    )
    mySprite.x = 25
    value_for_factory()
    pause(5000)
})
info.player1.onScore(0, function () {
    info.stopCountdown()
})
function value_for_factory () {
    info.changeScoreBy(-250)
    game.showLongText("get out of debt fast", DialogLayout.Top)
    info.startCountdown(15)
    for (let index = 0; index < 10000000000000; index++) {
        info.changeScoreBy(15)
        pause(2000)
    }
}
function many_loom_workers () {
    info.changeScoreBy(-50)
    game.showLongText("get out of debt fast", DialogLayout.Top)
    info.startCountdown(15)
    for (let index = 0; index < 10000000000000; index++) {
        info.changeScoreBy(5)
        pause(2000)
    }
}
info.player1.onScore(-0.9, function () {
    info.startCountdown(15)
})
info.player1.onScore(3, function () {
    info.stopCountdown()
})
let mySprite: Sprite = null
let factory_clump: Sprite = null
let loom_workers: Sprite = null
let worker: Sprite = null
tiles.setCurrentTilemap(tilemap`level8`)
game.showLongText("Welcome to Industrial Revolution Tycoon", DialogLayout.Bottom)
tiles.setCurrentTilemap(tilemap`level2`)
info.setScore(0)
worker = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e . e e e e e e . . 
    . . . . f d f . e 7 7 7 7 e . . 
    . . . . d d d . e 2 2 2 2 e . . 
    . . . f 6 6 6 f e 4 4 4 4 e . . 
    . . . . . 6 . . e 9 9 9 9 e . . 
    . . . . f f f . e e e e e e . . 
    . . . . f . f . e . . . . e . . 
    `, SpriteKind.worker)
let mySprite2 = sprites.create(img`
    . . . . f . . . . . . . 
    . . . f 1 f . . . . . . 
    . . . f 1 f . . . . . . 
    f f . f 1 f . f f f f . 
    f 1 f f 1 f f 1 f 1 f . 
    f 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 f 1 f 1 f 1 1 f . 
    f 1 1 f 1 f 1 f 1 1 f . 
    f 1 1 1 1 1 1 1 1 f . . 
    . f 1 1 1 1 1 1 f . . . 
    . f 1 1 f 1 f f . . . . 
    . . f f . f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite2, 100, 100)
worker.x = 10
Matirials()
game.onUpdateInterval(1000, function () {
	
})
game.onUpdateInterval(30000, function () {
	
})
