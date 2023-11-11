namespace SpriteKind {
    export const shuriken = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    info.changeScoreBy(1)
    tiles.setTileAt(location, sprites.castle.tilePath5)
})
scene.onOverlapTile(SpriteKind.shuriken, assets.tile`myTile3`, function (sprite, location) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`myTile2`)
    sprites.destroy(sprite)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    NINJA.setImage(assets.image`ninjaU`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (NINJA.image.equals(assets.image`ninjaR`)) {
        shuriken = sprites.createProjectileFromSprite(assets.image`shuriken`, NINJA, 50, 0)
    } else if (NINJA.image.equals(assets.image`ninjaU`)) {
        shuriken = sprites.createProjectileFromSprite(assets.image`shuriken`, NINJA, 0, -50)
    } else if (NINJA.image.equals(assets.image`ninjaL`)) {
        shuriken = sprites.createProjectileFromSprite(assets.image`shuriken`, NINJA, -50, 0)
    } else if (NINJA.image.equals(assets.image`ninjaD`)) {
        shuriken = sprites.createProjectileFromSprite(assets.image`shuriken`, NINJA, 0, 50)
    }
    shuriken.setKind(SpriteKind.shuriken)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    NINJA.setImage(assets.image`ninjaL`)
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
    NINJA.setImage(assets.image`ninjaR`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    NINJA.setImage(assets.image`ninjaD`)
})
let shuriken: Sprite = null
let NINJA: Sprite = null
info.setLife(3)
NINJA = sprites.create(assets.image`ninjaD`, SpriteKind.Player)
controller.moveSprite(NINJA)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(NINJA)
tiles.placeOnTile(NINJA, tiles.getTileLocation(6, 8))
