namespace SpriteKind {
    export const shuriken = SpriteKind.create()
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
    if (NINJA.tileKindAt(TileDirection.Bottom, assets.tile`myTile10`) || NINJA.tileKindAt(TileDirection.Right, assets.tile`myTile10`) || (NINJA.tileKindAt(TileDirection.Top, assets.tile`myTile10`) || NINJA.tileKindAt(TileDirection.Left, assets.tile`myTile10`))) {
        if (NINJA.image.equals(ninjaU)) {
            if (NINJA.tilemapLocation() == tiles.getTileLocation(15, 18)) {
                game.showLongText("The Door Is Locked", DialogLayout.Top)
            }
        }
    }
    if (tiles.tileAtLocationEquals(NINJA.tilemapLocation(), assets.tile`myTile9`)) {
        game.showLongText("Digging In The Field ", DialogLayout.Top)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
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
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    NINJA.setImage(ninjaL)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (controller.B.isPressed()) {
    	
    }
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
/**
 * fix door
 */
let shuriken: Sprite = null
let NINJA: Sprite = null
let ninjaU: Image = null
let ninjaD: Image = null
let ninjaL: Image = null
let ninjaR: Image = null
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
