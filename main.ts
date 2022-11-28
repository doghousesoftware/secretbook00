function alarm () {
    for (let index = 0; index < 4; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Angry)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
}
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 0) {
        alarm()
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . #
            . . . . .
            . . . . .
            `)
        basic.pause(200)
        basic.clearScreen()
    }
})
