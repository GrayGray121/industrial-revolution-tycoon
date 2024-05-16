namespace SpriteKind {
    export const Building = SpriteKind.create()
}
info.onScore(1000, function () {
    game.gameOver(true)
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
let mySprite2: Sprite = null
info.setScore(0)
let mySprite = sprites.create(img`
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
let worker = sprites.create(img`
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
    `, SpriteKind.Building)
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
    . . . . 5 1 5 b b b . . . . . . 
    . . . . f d f . e . . . . . . . 
    . . . 6 6 6 6 6 e . . . . . . . 
    . . . . . 6 . . e . . 8 b . . . 
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
    `],
200,
true
)
worker.x = 10
mySprite.x = 25
game.showLongText("a  ", DialogLayout.Bottom)
