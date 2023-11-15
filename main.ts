namespace SpriteKind {
    export const shuriken = SpriteKind.create()
    export const farmer = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`myTile1`)
})
scene.onOverlapTile(SpriteKind.shuriken, assets.tile`myTile3`, function (sprite, location) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`myTile2`)
    sprites.destroy(sprite)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    NINJA.setImage(ninjaU)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(NINJA, 0, 0)
    if (NINJA.tileKindAt(TileDirection.Bottom, assets.tile`myTile8`) || NINJA.tileKindAt(TileDirection.Right, assets.tile`myTile8`) || (NINJA.tileKindAt(TileDirection.Top, assets.tile`myTile8`) || NINJA.tileKindAt(TileDirection.Left, assets.tile`myTile8`))) {
        if (NINJA.image.equals(ninjaU)) {
            game.showLongText("Fort Yaho", DialogLayout.Top)
        }
    }
    if (NINJA.tileKindAt(TileDirection.Bottom, assets.tile`myTile5`) || NINJA.tileKindAt(TileDirection.Right, assets.tile`myTile5`) || (NINJA.tileKindAt(TileDirection.Top, assets.tile`myTile5`) || NINJA.tileKindAt(TileDirection.Left, assets.tile`myTile5`))) {
        if (NINJA.image.equals(ninjaL)) {
            game.showLongText("The Path Is Blocked", DialogLayout.Top)
        }
    }
    if (tiles.tileAtLocationEquals(NINJA.tilemapLocation(), assets.tile`myTile12`)) {
        interacting = true
        NINJA.sayText("Do you want to water the Sprout?", 2000, true)
        pause(2000)
        NINJA.sayText("A=Yes B=No", 2000, true)
        pause(2000)
        pauseUntil(() => controller.A.isPressed() || controller.B.isPressed())
        if (controller.A.isPressed()) {
            tiles.setTileAt(NINJA.tilemapLocation(), assets.tile`myTile11`)
            plants += 1
            NINJA.sayText("the plant got larger!", 2000, true)
            pause(2000)
        }
        if (controller.B.isPressed()) {
            NINJA.sayText("well ok then...", 2000, true)
            pause(2000)
        }
        interacting = false
    }
    if (tiles.tileAtLocationEquals(NINJA.tilemapLocation(), assets.tile`myTile9`)) {
        interacting = true
        NINJA.sayText("Do you want to water the soil?", 2000, true)
        pause(2000)
        NINJA.sayText("A=Yes B=No", 2000, true)
        pause(2000)
        pauseUntil(() => controller.A.isPressed() || controller.B.isPressed())
        if (controller.A.isPressed()) {
            tiles.setTileAt(NINJA.tilemapLocation(), assets.tile`myTile12`)
            NINJA.sayText("a plant sprouted!", 2000, true)
            pause(2000)
        }
        if (controller.B.isPressed()) {
            NINJA.sayText("well ok then...", 2000, true)
            pause(2000)
        }
        interacting = false
    }
    if (NINJA.overlapsWith(farmer)) {
        if (plants == 31) {
            farmer.sayText("you be a good farmer, take this!", 4000, true)
            pause(4000)
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
            info.changeScoreBy(20)
            sprites.destroy(farmer)
        } else {
            farmer.sayText("learn to be a good farmer and me give some you something good!", 5000, true)
            pause(5000)
        }
    }
    controller.moveSprite(NINJA)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (interacting == false) {
        if (NINJA.image.equals(ninjaR)) {
            shuriken = sprites.createProjectileFromSprite(assets.image`shuriken`, NINJA, 100, 0)
        } else if (NINJA.image.equals(ninjaU)) {
            shuriken = sprites.createProjectileFromSprite(assets.image`shuriken`, NINJA, 0, -100)
        } else if (NINJA.image.equals(ninjaL)) {
            shuriken = sprites.createProjectileFromSprite(assets.image`shuriken`, NINJA, -100, 0)
        } else if (NINJA.image.equals(ninjaD)) {
            shuriken = sprites.createProjectileFromSprite(assets.image`shuriken`, NINJA, 0, 100)
        }
        shuriken.setKind(SpriteKind.shuriken)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    NINJA.setImage(ninjaL)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`myTile2`)
})
scene.onOverlapTile(SpriteKind.shuriken, assets.tile`myTile0`, function (sprite, location) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    info.changeScoreBy(1)
    tiles.setTileAt(location, sprites.castle.tilePath5)
    sprites.destroy(sprite)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    NINJA.setImage(ninjaR)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    NINJA.setImage(ninjaD)
})
scene.onOverlapTile(SpriteKind.shuriken, assets.tile`myTile11`, function (sprite, location) {
    plants += -1
    tiles.setTileAt(location, assets.tile`myTile12`)
})
let shuriken: Sprite = null
let plants = 0
let farmer: Sprite = null
let NINJA: Sprite = null
let ninjaU: Image = null
let ninjaD: Image = null
let ninjaL: Image = null
let ninjaR: Image = null
let interacting = false
interacting = false
ninjaR = assets.image`ninjaR`
ninjaL = assets.image`ninjaL`
ninjaD = assets.image`ninjaD`
ninjaU = assets.image`ninjaU`
info.setLife(3)
NINJA = sprites.create(assets.image`ninjaD`, SpriteKind.Player)
controller.moveSprite(NINJA)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(NINJA)
tiles.placeOnTile(NINJA, tiles.getTileLocation(6, 8))
farmer = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f f e e e e e e f f . 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    . f e d d b b d d e f . 
    . f f e 4 4 4 4 e f f . 
    e 4 f 7 7 7 7 7 7 f 4 e 
    4 d f 7 7 7 7 7 7 f d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.farmer)
tiles.placeOnTile(farmer, tiles.getTileLocation(29, 8))
