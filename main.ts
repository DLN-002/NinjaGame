namespace SpriteKind {
    export const shuriken = SpriteKind.create()
    export const farmer = SpriteKind.create()
    export const imployer = SpriteKind.create()
    export const stormtrooper = SpriteKind.create()
    export const laser = SpriteKind.create()
    export const Dead = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.setImage(HeroU)
})
function shout_lasers () {
    if (STORMTROOPER1.kind() == SpriteKind.stormtrooper) {
        projectile = sprites.createProjectileFromSprite(img`
            2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 
            `, STORMTROOPER1, 50, 0)
    }
    if (STORMTROOPER2.kind() == SpriteKind.stormtrooper) {
        projectile = sprites.createProjectileFromSprite(img`
            2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 
            `, STORMTROOPER2, 50, 0)
    }
    if (STORMTROOPER3.kind() == SpriteKind.stormtrooper) {
        projectile = sprites.createProjectileFromSprite(img`
            2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 
            `, STORMTROOPER3, 50, 0)
    }
    if (STORMTROOPER4.kind() == SpriteKind.stormtrooper) {
        projectile = sprites.createProjectileFromSprite(img`
            2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 
            `, STORMTROOPER4, 50, 0)
    }
    if (STORMTROOPER5.kind() == SpriteKind.stormtrooper) {
        projectile = sprites.createProjectileFromSprite(img`
            2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 
            `, STORMTROOPER5, 50, 0)
    }
    pause(1000)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Hero, 0, 0)
    interacting = true
    if (Hero.tileKindAt(TileDirection.Bottom, assets.tile`myTile11`) || Hero.tileKindAt(TileDirection.Right, assets.tile`myTile11`) || (Hero.tileKindAt(TileDirection.Top, assets.tile`myTile11`) || Hero.tileKindAt(TileDirection.Left, assets.tile`myTile11`))) {
        see_sidd()
        Sidd.sayText("Thanks Kid", 750, true)
        pause(750)
        Sidd.sayText("here is your split", 1000, true)
        Credits += 3
        pause(1000)
        game.showLongText("Got Three Credits!", DialogLayout.Right)
        mishon2()
    }
    interacting = false
    controller.moveSprite(Hero)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
    tiles.setTileAt(tiles.getTileLocation(14, 13), assets.tile`myTile13`)
    tiles.setTileAt(location, assets.tile`myTile14`)
    tiles.setWallAt(tiles.getTileLocation(14, 13), false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    see_sidd()
    Sidd.sayText("You found it!", 1000, true)
    pause(1000)
})
sprites.onOverlap(SpriteKind.laser, SpriteKind.stormtrooper, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.disintegrate, 500)
})
function see_sidd () {
    Hero.setImage(assets.image`HeroD`)
    sprites.destroyAllSpritesOfKind(SpriteKind.stormtrooper)
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnTile(Hero, tiles.getTileLocation(4, 7))
    Sidd = sprites.create(assets.image`Sidd`, SpriteKind.imployer)
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
        laser.setKind(SpriteKind.laser)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.setImage(HeroL)
})
sprites.onDestroyed(SpriteKind.stormtrooper, function (sprite) {
    sprite.setKind(SpriteKind.Dead)
    Credits += 1
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.setImage(HeroR)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    HeroHealth.value += -5
})
function mishon1 () {
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
    STORMTROOPER1 = sprites.create(stormtrooperImige, SpriteKind.stormtrooper)
    tiles.placeOnTile(STORMTROOPER1, tiles.getTileLocation(3, 9))
    STORMTROOPER2 = sprites.create(stormtrooperImige, SpriteKind.stormtrooper)
    tiles.placeOnTile(STORMTROOPER2, tiles.getTileLocation(2, 12))
    STORMTROOPER3 = sprites.create(stormtrooperImige, SpriteKind.stormtrooper)
    tiles.placeOnTile(STORMTROOPER3, tiles.getTileLocation(2, 10))
    STORMTROOPER4 = sprites.create(stormtrooperImige, SpriteKind.stormtrooper)
    tiles.placeOnTile(STORMTROOPER4, tiles.getTileLocation(2, 11))
    STORMTROOPER5 = sprites.create(stormtrooperImige, SpriteKind.stormtrooper)
    tiles.placeOnTile(STORMTROOPER5, tiles.getTileLocation(2, 13))
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.setImage(HeroD)
})
function mishon2 () {
    Sidd.sayText("Hey kid!", 750, true)
    pause(750)
    Sidd.sayText("I got a mission for you!", 1000, true)
    pause(1000)
    Sidd.sayText("Go fined a emperial bass!", 2000, true)
    pause(2000)
    Sidd.sayText("Now go!", 750, true)
    pause(1000)
    sprites.destroy(Sidd)
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.placeOnTile(Hero, tiles.getTileLocation(1, 1))
    controller.moveSprite(Hero)
}
let laser: Sprite = null
let Sidd: Sprite = null
let STORMTROOPER5: Sprite = null
let STORMTROOPER4: Sprite = null
let STORMTROOPER3: Sprite = null
let STORMTROOPER2: Sprite = null
let projectile: Sprite = null
let STORMTROOPER1: Sprite = null
let HeroHealth: StatusBarSprite = null
let Hero: Sprite = null
let HeroU: Image = null
let HeroD: Image = null
let HeroL: Image = null
let HeroR: Image = null
let stormtrooperImige: Image = null
let interacting = false
let laser_speedB = 0
let laser_speedF = 0
let laserY: Image = null
let laserX: Image = null
let Credits = 0
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
stormtrooperImige = assets.image`Stormtrooper`
HeroR = assets.image`ninjaR`
HeroL = assets.image`HeroL`
HeroD = assets.image`HeroD`
HeroU = assets.image`ninjaU`
Hero = sprites.create(assets.image`HeroD`, SpriteKind.Player)
HeroHealth = statusbars.create(16, 4, StatusBarKind.Health)
HeroHealth.attachToSprite(Hero, 2, 0)
HeroHealth.max = 15
HeroHealth.value = 15
HeroHealth.setColor(8, 15)
see_sidd()
scene.cameraFollowSprite(Hero)
mishon1()
forever(function () {
    shout_lasers()
})
