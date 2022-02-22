loadRoot("http://localhost:3000/mario/")
loadSpriteAtlas("Characters/Mario.png", {
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

// ADD GRAVITY
gravity(1600)


const floor = loadSpriteAtlas('/Tilesets/OverWorld.png', {
    "floor": {
        x: 0,
        y: 0,
        width: 16,
        height: 16,
    }
})

scene("mario-move", MarioMove)
go("mario-move")

function MarioMove() {
    // const marioX = 30;
    // const marioY = 200;
    let speed = 2;
    gravity(2500)

    const mario = add([
        sprite("mario"),
        pos(center()),
        area(),
        body()
    ])
    mario.play("idle")
    addLevel([
        "                                                                                                                                ",
        "                                                                                                                                ",
        "                                                                                                                                ",
        "                                                                                                                                ",
        "                                                                                                                                ",
        "                                                                                                                                ",
        "                                                                                                                                ",
        "                                                                                                                                ",
        "                                                                                                                                ",
        "                                                                                                                                ",
        "                                                                                                                                ",
        "                                                                                                                                ",
        "                                                                                                                                ",
        "                                                                                                                                ",
        "                                                                                                                                ",
        "                                                                                                                                ",
        "                                                                                                                                ",
        "===================   =============================================================   ==========================================",
        "===================   =============================================================   ==========================================",
    ], {
        // define the size of each block
        width: 16,
        height: 16,
        // define what each symbol means, by a function returning a component list (what will be passed to add())
        "=": () => [
            sprite("floor"),
            area(),
            solid(),
        ]
    })


    mario.onUpdate(() => {
        const right = isKeyDown("right")
        const left = isKeyDown("left")
        const run = isKeyDown("r")
        const curAnim = mario.curAnim()
        const currCam = camPos();
        if (currCam.x < mario.pos.x) {
            camPos(mario.pos.x, currCam.y);
        } else if(currCam.x > mario.pos.x){
            camPos(mario.pos.x, currCam.y)
        }


        //JUMP
        onKeyPress("space", () => {
            // .isGrounded() is provided by body()
            if (mario.isGrounded()) {
                // .jump() is provided by body()
                mario.jump()
            }
        })


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

