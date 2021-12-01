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
            Enemy.spawnIceCream();
            enemysSpawned += 1
            spawnRate -= 10
            Enemy.spawnDonut()
            
        }
    });
    timer.throttle("spawnTaco", 2000, function () {
        if (canSpawn) {
            Enemy.spawnTaco(player);
            enemysSpawned += 1;
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