namespace SpriteKind {
    export const Building = SpriteKind.create()
    export const worker = SpriteKind.create()
}
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
    mySprite.x = 25
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
    500,
    true
    )
})
info.onCountdownEnd(function () {
    scene.setBackgroundImage(img`
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99999999999999999999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99988888888888899999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff98888885558888888999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff98888885f58888888999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff98888888588888888999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99988888888888899999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff999dddddddddddd99999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff999dddddddddddd99999
        fffff1111111111fffff1111111111fffff111111111.fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff999ddfffddfffdd99999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff999ddffffffffdd99999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff999ddfffddfffdd99999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff999dddddddddddd99999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff999dddddddddddd99999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff999dddddddddddd99999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff999dddffffffddd99999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff999dddddddddddd99999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff999dddddddddddd99999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff88888888888888888888
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff88888888888888888888
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff88888888888888888888
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff88888888888888888888
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff88888888888888888888
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99888888888888888999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99888888888888888999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99888888888888888999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99888888888888888999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99888888888888888999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99888888888888888999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99888888888888888999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99888888888888888999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99888888888888888999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99888888888888888999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99888888888888888999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99888888888888888999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99888888888888888999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99888888888888888999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99888888888888888999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99888888888888888999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99888888888888888999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99fffffffffffffff999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99fffffffffffffff999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99fffffffffffffff999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99fffffffffffffff999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99fffff99999fffff999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99fffff99999fffff999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99fffff99999fffff999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99fffff99999fffff999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99fffff99999fffff999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99fffff99999fffff999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99fffff99999fffff999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99fffff99999fffff999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99fffff99999fffff999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99fffff99999fffff999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99fffff99999fffff999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99fffff99999fffff999
        fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff1111111111fffff99fffff99999fffff999
        `)
    pause(1000)
    game.showLongText("you went into debt and the police found you", DialogLayout.Bottom)
    pause(1000)
    game.gameOver(false)
})
info.onScore(10000, function () {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    sprites.destroy(mySprite)
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
    mySprite.x = 25
    info.changeScoreBy(-50)
})
info.player1.onScore(0, function () {
    info.stopCountdown()
})
info.player1.onScore(-0.9, function () {
    info.startCountdown(2)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
info.setScore(0)
mySprite = sprites.create(img`
    2 2 2 2 
    2 2 2 2 
    2 2 2 2 
    2 2 2 2 
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
worker.x = 10
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
