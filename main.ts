namespace SpriteKind {
    export const cloud = SpriteKind.create()
}
sprites.onDestroyed(SpriteKind.cloud, function (sprite) {
    game.over(true)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(1)
})
let rain_drop: Sprite = null
let cloud = sprites.createProjectileFromSide(assets.image`cloud`, 10, 0)
cloud.y = 60
cloud.setKind(SpriteKind.cloud)
game.onUpdateInterval(50, function () {
    rain_drop = sprites.createProjectileFromSprite(assets.image`rain drop`, cloud, 0, 30)
    rain_drop.y += 3
    rain_drop.x += randint(1, 14)
})
