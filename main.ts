function spawnEnemy() {
    enemy = sprites.create(img`
        ..............bbbbbbb...........
        ...........bb66663333baa........
        .........bb3367776333663aa......
        ........b33333888333389633aa....
        .......b3333333333333389633aa...
        ......b34443333333333338633bae..
        .....b3455433333333334443333ae..
        ....b33322333dddd3333455233daee.
        ...b3d333333dd3bbbb33322333dabe.
        ..b3d333333d3bb33bb33333333da4e.
        ..bd33333333b33aab3333333223a4ee
        .b3d3663333b33aab33366332442b4ee
        .bd3b983333a3aa3333387633ee3b4ee
        .bd6983333baaa333333387633bb4bee
        b3d6833333bba333333333863ba44ebe
        bdd3333333bb3333333333333a44bebe
        add666633333322333366333ba44bbbe
        ad67776333332442336983d3a444b4e.
        add888b333333ee3369833d3a44b44e.
        add333333333333336833d3a444b4e..
        a3dd3333344433333dddd3a444b44e..
        ab33ddd325543333dd33aa444b44e...
        .eabb3dd32233333baaa4444b44e....
        .ebabb3d333d33baa444443b44e.....
        ..ebaab3ddd3aaa4444433b44e......
        ..eebbaab33a44444333b444e.......
        ...eeebbaab444b333b4444e........
        ....ebeeebbbbbbbb4444ee.........
        .....eebbbb44444444ee...........
        .......eeebbb444eee.............
        ..........eeeeee................
        ................................
        `, SpriteKind.Enemy)
    enemy.y = 0
    enemy.x = Math.randomRange(0, 200)
    enemy.setVelocity(0, 50)
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    player.destroy()
    canSpawn = false
    timer.after(2000, function () {
        game.showLongText("You died! Press A to play again!\n Score: " + info.score() + "\nHighscore: " + info.highScore(), DialogLayout.Center)
        game.reset()
        info.saveHighScore()
    })
});
let enemysSpawned = 0
let enemy: Sprite = null
let canSpawn = false
let player = sprites.create(img`
    ....ffffff.........ccc..
    ....ff22ccf.......cc4f..
    .....ffccccfff...cc44f..
    ....cc24442222cccc442f..
    ...c9b4422222222cc422f..
    ..c999b2222222222222fc..
    .c2b99111b222222222c22c.
    c222b111992222ccccccc22f
    f222222222222c222ccfffff
    .f2222222222442222f.....
    ..ff2222222cf442222f....
    ....ffffffffff442222c...
    .........f2cfffc2222c...
    .........fcc2ffffffff...
    ..........fc2ffff.......
    ...........fffff........
    `, SpriteKind.Player)
canSpawn = true
let spawnRate = 1000
// Kill player
game.onUpdate(function () {
    timer.throttle("spawnEnemy", spawnRate, function () {
        if (canSpawn) {
            info.changeScoreBy(1)
            spawnEnemy()
            enemysSpawned += 1
            if (enemysSpawned > 1) {
                spawnRate += 0 - 10
                enemysSpawned = 0
            }
        }
    })
    if (controller.up.isPressed()) {
        player.y -= 1;
        if (player.y < 5) {
            player.y += 1
        }
    }
    if (controller.down.isPressed()) {
        player.y += 1
        if (player.y > 118) {
            player.y -= 1;
        }
    }
    if (controller.right.isPressed()) {
        player.x += 1
        if (player.x > 157) {
            player.x -= 1;
        }
    }
    if (controller.left.isPressed()) {
        player.x -= 1;
        if (player.x < 5) {
            player.x += 1
        }
    }
    timer.throttle("changeScore", 1000, () => { 
        info.showScore(true)
        info.saveHighScore()
    });
    
});