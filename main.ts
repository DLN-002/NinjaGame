namespace SpriteKind {
    export const shuriken = SpriteKind.create()
    export const farmer = SpriteKind.create()
    export const imployer = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.setImage(HeroU)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Hero, 0, 0)
    interacting = true
    if (Hero.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`) || Hero.tileKindAt(TileDirection.Right, assets.tile`transparency16`) || (Hero.tileKindAt(TileDirection.Top, assets.tile`transparency16`) || Hero.tileKindAt(TileDirection.Left, assets.tile`transparency16`))) {
    	
    }
    interacting = false
    controller.moveSprite(Hero)
})
function see_sidd () {
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnTile(Hero, tiles.getTileLocation(4, 7))
    Sidd = sprites.create(assets.image`farmer`, SpriteKind.imployer)
    tiles.placeOnTile(Sidd, tiles.getTileLocation(6, 7))
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (interacting == false) {
        if (Hero.image.equals(HeroR)) {
            laser = sprites.createProjectileFromSprite(laserX, Hero, laser_speedF, 0)
        } else if (Hero.image.equals(HeroU)) {
            laser = sprites.createProjectileFromSprite(laserY, Hero, 0, laser_speedB)
        } else if (Hero.image.equals(HeroL)) {
            laser = sprites.createProjectileFromSprite(laserX, Hero, laser_speedB, 0)
        } else if (Hero.image.equals(HeroD)) {
            laser = sprites.createProjectileFromSprite(laserY, Hero, 0, laser_speedF)
        }
        laser.setKind(SpriteKind.shuriken)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.setImage(HeroL)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.setImage(HeroR)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.setImage(HeroD)
})
let laser: Sprite = null
let Sidd: Sprite = null
let Hero: Sprite = null
let HeroU: Image = null
let HeroD: Image = null
let HeroL: Image = null
let HeroR: Image = null
let interacting = false
let laser_speedB = 0
let laser_speedF = 0
let laserY: Image = null
let laserX: Image = null
laserX = img`
    8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 
    `
laserY = img`
    8 8 
    8 8 
    8 8 
    8 8 
    8 8 
    8 8 
    8 8 
    8 8 
    8 8 
    `
laser_speedF = 100
laser_speedB = -100
interacting = false
HeroR = assets.image`ninjaR`
HeroL = assets.image`HeroL`
HeroD = assets.image`HeroD`
HeroU = assets.image`ninjaU`
Hero = sprites.create(assets.image`HeroD`, SpriteKind.Player)
let HeroHealth = statusbars.create(16, 4, StatusBarKind.Health)
HeroHealth.attachToSprite(Hero, 2, 0)
HeroHealth.max = 10
HeroHealth.value = 10
HeroHealth.setColor(8, 15)
see_sidd()
scene.cameraFollowSprite(Hero)
Sidd.sayText("Hey kid!", 750, true)
pause(750)
Sidd.sayText("I got a mission for you!", 1000, true)
pause(1000)
Sidd.sayText("Go collect some valuable cargo for credits!", 2000, true)
pause(2000)
Sidd.sayText("Now go!", 750, true)
pause(1000)
sprites.destroy(Sidd)
tiles.setCurrentTilemap(tilemap`level6`)
tiles.placeOnTile(Hero, tiles.getTileLocation(1, 1))
controller.moveSprite(Hero)
let STORMTROOPER = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . f f 1 1 1 1 1 1 f f . . . 
    . . f b 1 1 1 1 1 1 1 1 b f . . 
    . . f b 1 1 1 1 1 1 1 1 b f . . 
    . . f b 1 1 1 1 1 1 1 1 b f . . 
    . . f f f f f f f f f f f f . . 
    . . f 1 f f f 1 1 f f f 1 f . . 
    . f 1 b f f 1 b b 1 f f b 1 f . 
    . f b 1 1 1 b 1 1 b 1 1 1 b f . 
    . . f f 1 f 1 f f 1 f 1 f f . . 
    . f 1 1 f 1 1 f f 1 1 f 1 1 f . 
    . f 1 b f f f 1 1 f f f b 1 f . 
    . . f f f f 1 b b 1 f f f f . . 
    . . . f 1 b f f f f b 1 f . . . 
    . . . f 1 1 1 f f 1 1 1 f . . . 
    . . . . f f f . . f f f . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(STORMTROOPER, tiles.getTileLocation(3, 9))
STORMTROOPER = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . f f 1 1 1 1 1 1 f f . . . 
    . . f b 1 1 1 1 1 1 1 1 b f . . 
    . . f b 1 1 1 1 1 1 1 1 b f . . 
    . . f b 1 1 1 1 1 1 1 1 b f . . 
    . . f f f f f f f f f f f f . . 
    . . f 1 f f f 1 1 f f f 1 f . . 
    . f 1 b f f 1 b b 1 f f b 1 f . 
    . f b 1 1 1 b 1 1 b 1 1 1 b f . 
    . . f f 1 f 1 f f 1 f 1 f f . . 
    . f 1 1 f 1 1 f f 1 1 f 1 1 f . 
    . f 1 b f f f 1 1 f f f b 1 f . 
    . . f f f f 1 b b 1 f f f f . . 
    . . . f 1 b f f f f b 1 f . . . 
    . . . f 1 1 1 f f 1 1 1 f . . . 
    . . . . f f f . . f f f . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(STORMTROOPER, tiles.getTileLocation(4, 9))
STORMTROOPER = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . f f 1 1 1 1 1 1 f f . . . 
    . . f b 1 1 1 1 1 1 1 1 b f . . 
    . . f b 1 1 1 1 1 1 1 1 b f . . 
    . . f b 1 1 1 1 1 1 1 1 b f . . 
    . . f f f f f f f f f f f f . . 
    . . f 1 f f f 1 1 f f f 1 f . . 
    . f 1 b f f 1 b b 1 f f b 1 f . 
    . f b 1 1 1 b 1 1 b 1 1 1 b f . 
    . . f f 1 f 1 f f 1 f 1 f f . . 
    . f 1 1 f 1 1 f f 1 1 f 1 1 f . 
    . f 1 b f f f 1 1 f f f b 1 f . 
    . . f f f f 1 b b 1 f f f f . . 
    . . . f 1 b f f f f b 1 f . . . 
    . . . f 1 1 1 f f 1 1 1 f . . . 
    . . . . f f f . . f f f . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(STORMTROOPER, tiles.getTileLocation(2, 10))
STORMTROOPER = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . f f 1 1 1 1 1 1 f f . . . 
    . . f b 1 1 1 1 1 1 1 1 b f . . 
    . . f b 1 1 1 1 1 1 1 1 b f . . 
    . . f b 1 1 1 1 1 1 1 1 b f . . 
    . . f f f f f f f f f f f f . . 
    . . f 1 f f f 1 1 f f f 1 f . . 
    . f 1 b f f 1 b b 1 f f b 1 f . 
    . f b 1 1 1 b 1 1 b 1 1 1 b f . 
    . . f f 1 f 1 f f 1 f 1 f f . . 
    . f 1 1 f 1 1 f f 1 1 f 1 1 f . 
    . f 1 b f f f 1 1 f f f b 1 f . 
    . . f f f f 1 b b 1 f f f f . . 
    . . . f 1 b f f f f b 1 f . . . 
    . . . f 1 1 1 f f 1 1 1 f . . . 
    . . . . f f f . . f f f . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(STORMTROOPER, tiles.getTileLocation(2, 11))
