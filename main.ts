namespace SpriteKind {
    export const Building = SpriteKind.create()
    export const worker = SpriteKind.create()
}
function OpenMenu () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Building)
    sprites.destroyAllSpritesOfKind(SpriteKind.worker)
    scene.setBackgroundImage(assets.image`Menu`)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (MenuOpen == 0) {
        OpenMenu()
    } else {
    	
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . f f f . . . . . . 
        f f . f 1 f . f f f f . 
        f 1 f 1 1 1 f 1 f 1 f . 
        f 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 f 1 f 1 f 1 1 f . 
        f 1 1 f 1 f 1 f 1 1 f . 
        f 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 f . . . 
        . f 1 1 f 1 f f . . . . 
        . . f f . f . . . . . . 
        `,img`
        . . . . f . . . . . . . 
        . . . f 1 f . . . . . . 
        . . . f 1 f . . . . . . 
        f f . f 1 f . f f f f . 
        f 1 f 1 1 1 f 1 f 1 f . 
        f 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 f 1 f 1 f 1 1 f . 
        f 1 1 f 1 f 1 f 1 1 f . 
        f 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 f . . . 
        . f 1 1 f 1 f f . . . . 
        . . f f . f . . . . . . 
        `],
    200,
    false
    )
})
function SpawnStuff () {
    info.setScore(0)
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
        . . . . . 5 . . . . . . . . . . 
        . . . . 5 1 5 b b b . . . . . . 
        . . . . f d f . e . . . . . . . 
        . . . 6 6 6 6 6 e . . . . . . . 
        . . . . . 6 . . e . . 8 b . . . 
        . . . . f f f . . . 8 8 b . . . 
        . . . . f . f . . . b 8 b . . . 
        `, SpriteKind.worker)
    mySprite2 = sprites.create(img`
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
    scene.setBackgroundColor(10)
    animation.runImageAnimation(
    mySprite,
    [img`
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
        `,img`
        . . . . . . . . . . . . . . b b 
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
        `,img`
        . . . . . . . . . . . . . b . . 
        . . . . . . . . . . . . . . b . 
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
        . . . . . . . . . . . . b . . . 
        . . . . . . . . . . . . . b . . 
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
        . . . . . . . . . . . . b . b b 
        . . . . . . . . . . . . . b . . 
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
    200,
    true
    )
    worker.x = 10
    mySprite.x = 25
    MenuOpen = 0
}
info.onScore(10000, function () {
    game.gameOver(true)
})
let worker: Sprite = null
let mySprite: Sprite = null
let mySprite2: Sprite = null
let MenuOpen = 0
SpawnStuff()
game.onUpdateInterval(2000, function () {
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
        . . . . . 5 . . . . . . . . . . 
        . . . . 5 1 5 . . . . . . . . . 
        . . . . f d f . . . b . . . . . 
        . . . 6 6 6 6 6 e e b . . . . . 
        . . . . . 6 . . . . b 8 b . . . 
        . . . . f f f . . . 8 8 b . . . 
        . . . . f . f . . . b 8 b . . . 
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
        . . . . . 5 . . . . . . . . . . 
        . . . . 5 1 5 . . . . . . . . . 
        . . . . f d f . . . b . . . . . 
        . . . 6 6 6 6 6 e e b . . . . . 
        . . . . . 6 . . . . b 8 b . . . 
        . . . . f f f . . . 8 8 b . . . 
        . . . . f . f . . . b 8 b . . . 
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
        . . . . . 5 . . . . . . . . . . 
        . . . . 5 1 5 . . . . . . . . . 
        . . . . f d f . . . b . . . . . 
        . . . 6 6 6 6 6 e e b . . . . . 
        . . . . . 6 . . . . b 8 b . . . 
        . . . . f f f . . . 8 8 b . . . 
        . . . . f . f . . . b 8 b . . . 
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
        . . . . . 5 . . . . . . . . . . 
        . . . . 5 1 5 . . . . . . . . . 
        . . . . f d f . . . b . . . . . 
        . . . 6 6 6 6 6 e e b . . . . . 
        . . . . . 6 . . . . b 8 b . . . 
        . . . . f f f . . . 8 8 b . . . 
        . . . . f . f . . . b 8 b . . . 
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
        . . . . . 5 . . . . . . . . . . 
        . . . . 5 1 5 b b b . . . . . . 
        . . . . f d f . e . . . . . . . 
        . . . 6 6 6 6 6 e . . . . . . . 
        . . . . . 6 . . e . . 8 b . . . 
        . . . . f f f . . . 8 8 b . . . 
        . . . . f . f . . . b 8 b . . . 
        `],
    200,
    false
    )
    info.changeScoreBy(1)
})
