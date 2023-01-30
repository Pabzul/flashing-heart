basic.showString("Hello!")
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Surprised)
}
basic.showString("Soy PABLO")
basic.showIcon(IconNames.Chessboard)
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.SmallDiamond)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    while (input.buttonIsPressed(Button.B)) {
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
    }
})
