loadRoot("http://localhost:3000/mario/")
loadSpriteAtlas("Mario.png", {
    "mario": {
        x: 0, //starting point vert
        y: 0, // starting point horiz
        width: 832, // width of the entire sprite sheet
        height: 32,
        sliceX: 25, // number of frames horizontally
        anims: {
            'walkRight': { from: 0, to: 3, loop: true },
            'idle': { from: 0, to: 0 }
        }
    }
})

scene("mario-move", MarioMove)
go("mario-move")

function MarioMove() {
    const marioX = 30;
    const marioY = 20;
    let speed = 2;

    const mario = add([
        pos(marioX, marioY),
        sprite("mario"),
    ])
    mario.play("idle")

    mario.onUpdate(() => {
        const right = isKeyDown("right")
        const left = isKeyDown("left")
        const run = isKeyDown("r")
        const curAnim = mario.curAnim()

        if (run) {
            speed = 4
        } else {
            speed = 2
        }

        if (right) {
    
            if (curAnim !== "walkRight") {
                mario.play('walkRight')
            }
            mario.flipX(false)
            mario.pos.x += speed

        } else if (left) {

            if (curAnim !== "walkRight") {
                mario.play('walkRight')
            }

            mario.flipX(true)
            mario.pos.x -= speed

        } else {

            mario.play("idle")

        }
    })
}

