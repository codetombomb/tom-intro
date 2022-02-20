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
            'idle': { from: 0, to: 0}
        }
    }
})

scene("mario-move", MarioMove)
go("mario-move")

function MarioMove() {
    console.log("moving mario")
    const mario = add([
        pos(500, 200),
        sprite("mario"),
    ])
    mario.play("idle")
}

