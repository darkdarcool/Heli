
let isFirstTaco = true;

namespace Enemy {
    export function spawnIceCream() {
        let enemy = sprites.create(img`
        ............3333bb..bb33333.....
        ........3bb31111d3b311d111d33...
        .......3bdd11111dbd11d11111113..
        .......bdddd1111bd11d111dd11113.
        ......3d111dd111b11d111dd33d11d3
        ......3d11111dd1d11d111d11d33113
        ....bb3d111111dd13dd111d1dd3b31b
        ...b3d3dd111111dd13dd11d1dddbbdb
        ...3ddd31d111111dd133dddddddb.b.
        ..311111d1ddd1111dd11dddddd33...
        ..3111111d111dd111dd1111dd3313..
        ..bddd1111ddd11dd111d111111113..
        ..311ddd111dddd11dd11ddd1111ddb.
        ..31111dd111dddd11dd111dddddddb.
        ...bd1111d1113ddd11dd1111111d3b.
        ...4dd1111d1113ddd11ddd111d333b.
        ..4dbdddd11d11133ddddddddddddb..
        .4ddbddddd11d111d33ddddddddd3b..
        .4dddb11ddd11dd111d333dddd3bb...
        .4dd55b111d11dd11111d3333bbb....
        .445555b111d11dddd111111ddb.....
        .4455555bd1d311ddddddddddd3.....
        .45455555bb1d3111ddddddd113.....
        .4554555555b333d1111111113......
        455554555555bbb33d11111d33......
        4d555545555555dbbb3d11d33.......
        4dd5555455555ddddd43333.........
        45dd555544ddddddd4..............
        .45dd5555d44dddd4...............
        ..45dd55dddd4444................
        ...45dd55444....................
        ....44444.......................
    `, SpriteKind.Enemy)
        enemy.y = 0
        enemy.x = Math.randomRange(0, 200);
        enemy.setVelocity(0, 20)
    }
    export function spawnDonut() {
        let enemy = sprites.create(img`
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
        enemy.y = 0;
        enemy.x = Math.randomRange(0, 200);
        enemy.setVelocity(0, 75);
    }

    export function spawnTaco(player: Sprite) {
        let enemy = sprites.create(img`
            . . . . . . . e e e e . . . . .
            . . . . . e e 4 5 5 5 e e . . .
            . . . . e 4 5 6 2 2 7 6 6 e . .
            . . . e 5 6 6 7 2 2 6 4 4 4 e .
            . . e 5 2 2 7 6 6 4 5 5 5 5 4 .
            . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4
            . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4
            e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4
            e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4
            e 5 c c e 5 4 5 5 5 4 5 5 5 e .
            e 5 c c 5 5 5 5 5 5 5 5 4 e . .
            e 5 e c 5 4 5 4 5 5 5 e e . . .
            e 5 e e 5 5 5 5 5 4 e . . . . .
            4 5 4 e 5 5 5 5 e e . . . . . .
            . 4 5 4 5 5 4 e . . . . . . . .
            . . 4 4 e e e . . . . . . . . .
        `, SpriteKind.Enemy)
        if (isFirstTaco) {
            enemy.y = Math.randomRange(0, 200);
            isFirstTaco = false;
        }
        else {
            enemy.y = player.y;
        }
        enemy.x = 150;
        enemy.setVelocity(-100, 0)
    }

}