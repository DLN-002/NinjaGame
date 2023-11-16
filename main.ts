namespace SpriteKind {
    export const shuriken = SpriteKind.create()
    export const farmer = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    NINJA.setImage(ninjaU)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`GoldenShurikenGrass`, function (sprite, location) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`Grass`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(NINJA, 0, 0)
    if (NINJA.tileKindAt(TileDirection.Bottom, assets.tile`FortYahoSine`) || NINJA.tileKindAt(TileDirection.Right, assets.tile`FortYahoSine`) || (NINJA.tileKindAt(TileDirection.Top, assets.tile`FortYahoSine`) || NINJA.tileKindAt(TileDirection.Left, assets.tile`FortYahoSine`))) {
        if (NINJA.image.equals(ninjaU)) {
            game.showLongText("Fort Yaho", DialogLayout.Top)
        }
    }
    if (NINJA.tileKindAt(TileDirection.Bottom, assets.tile`Rocks`) || NINJA.tileKindAt(TileDirection.Right, assets.tile`Rocks`) || (NINJA.tileKindAt(TileDirection.Top, assets.tile`Rocks`) || NINJA.tileKindAt(TileDirection.Left, assets.tile`Rocks`))) {
        if (NINJA.image.equals(ninjaL)) {
            game.showLongText("The Path Is Blocked", DialogLayout.Top)
        }
    }
    if (tiles.tileAtLocationEquals(NINJA.tilemapLocation(), assets.tile`Sprout`)) {
        interacting = true
        NINJA.sayText("Do you want to water the Sprout?", 2000, true)
        pause(2000)
        NINJA.sayText("A=Yes B=No", 2000, true)
        pause(2000)
        pauseUntil(() => controller.A.isPressed() || controller.B.isPressed())
        if (controller.A.isPressed()) {
            tiles.setTileAt(NINJA.tilemapLocation(), assets.tile`Plant`)
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
    if (tiles.tileAtLocationEquals(NINJA.tilemapLocation(), assets.tile`Dirt`)) {
        interacting = true
        NINJA.sayText("Do you want to water the soil?", 2000, true)
        pause(2000)
        NINJA.sayText("A=Yes B=No", 2000, true)
        pause(2000)
        pauseUntil(() => controller.A.isPressed() || controller.B.isPressed())
        if (controller.A.isPressed()) {
            tiles.setTileAt(NINJA.tilemapLocation(), assets.tile`Sprout`)
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
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    NINJA.setImage(ninjaR)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    NINJA.setImage(ninjaD)
})
scene.onOverlapTile(SpriteKind.shuriken, assets.tile`Plant`, function (sprite, location) {
    plants += -1
    tiles.setTileAt(location, assets.tile`Sprout`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`GoldenShurikenSand`, function (sprite, location) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`Sand`)
})
scene.onOverlapTile(SpriteKind.shuriken, assets.tile`GoldenShurikenGrass`, function (sprite, location) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`Grass`)
    sprites.destroy(sprite)
})
scene.onOverlapTile(SpriteKind.shuriken, assets.tile`GoldenShurikenSand`, function (sprite, location) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    info.changeScoreBy(1)
    tiles.setTileAt(location, sprites.castle.tilePath5)
    sprites.destroy(sprite)
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
tiles.setCurrentTilemap(tilemap`Map`)
scene.cameraFollowSprite(NINJA)
tiles.placeOnTile(NINJA, tiles.getTileLocation(6, 8))
farmer = sprites.create(assets.image`farmer`, SpriteKind.farmer)
tiles.placeOnTile(farmer, tiles.getTileLocation(29, 8))
