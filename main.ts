scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.over(true)
})
let mySprite2 = sprites.create(img`
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . . . e e d e d . . . . . . 
    . . . . . e d d 9 d . . . . . . 
    . . . . . d d d d d d d . . . . 
    . . . . . d d d d e e . . . . . 
    . . . . 2 2 8 2 8 2 . . . . . . 
    . . . . 2 2 8 2 8 2 2 . . . . . 
    . . . . 2 8 5 8 5 8 2 2 . . . . 
    . . . . 1 8 8 8 8 8 . 2 1 . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite2, 300, 300)
scene.setBackgroundColor(12)
tiles.setTilemap(tiles.createTilemap(hex`100010000101000001010401010101010000010505000005050500000000000500050305010005050500000505050500000503050500050500000505000000000000000505000505000505000005050505050005050005050005050005050505050500000500050500050500000505050105050005000505000505050005050506050500050000000005050500000005050505000000000500050505050500050505000000050005050505050500000505000505000000050505000000000005050000050000050505000005050505050500000500000507000008080802010200000000000005000005050505010000000101000a000000000000000000000505050509`, img`
    2 2 . . 2 2 2 2 2 2 2 2 . . 2 2 
    2 . . 2 2 2 . . . . 2 2 . 2 2 2 
    2 . 2 2 2 . . 2 2 2 2 . . 2 2 2 
    2 . 2 2 . . 2 2 . . . . . 2 . 2 
    2 . 2 2 . 2 2 . . 2 2 2 2 2 . 2 
    2 . 2 2 . 2 2 . 2 2 2 2 2 2 . . 
    2 . 2 2 . 2 2 . . 2 2 2 2 2 2 . 
    2 . 2 2 . 2 2 2 . 2 2 2 2 2 2 . 
    2 . . . . 2 2 2 . . . 2 2 2 2 . 
    . . . 2 . 2 2 2 2 2 . 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 . 2 2 . 2 2 
    . . . 2 2 2 . . . . . 2 2 . . 2 
    . . 2 2 2 . . 2 2 2 2 2 2 2 . 2 
    . . 2 . . . 2 2 2 2 2 2 . 2 . . 
    . . 2 . . 2 2 2 2 2 . . . 2 2 . 
    . . . . . . . . . . . 2 2 2 2 . 
    `, [myTiles.transparency16,sprites.dungeon.floorMixed,sprites.dungeon.floorLight3,sprites.dungeon.floorDark0,sprites.dungeon.floorDark5,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorLightMoss,sprites.builtin.brick,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite2, sprites.dungeon.collectibleBlueCrystal)
scene.cameraFollowSprite(mySprite2)
info.startCountdown(30)
