namespace SpriteKind {
    export const shuriken = SpriteKind.create()
    export const farmer = SpriteKind.create()
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
HeroL = assets.image`ninjaL`
HeroD = assets.image`HeroD`
HeroU = assets.image`ninjaU`
Hero = sprites.create(assets.image`HeroD`, SpriteKind.Player)
let HeroHealth = statusbars.create(16, 4, StatusBarKind.Health)
HeroHealth.attachToSprite(Hero, 2, 0)
HeroHealth.max = 10
HeroHealth.value = 10
HeroHealth.setColor(8, 15)
controller.moveSprite(Hero)
tiles.setCurrentTilemap(tilemap`Map`)
scene.cameraFollowSprite(Hero)
tiles.placeOnTile(Hero, tiles.getTileLocation(6, 8))
