basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(500)
    } else if (input.buttonIsPressed(Button.AB)) {
        basic.showIcon(IconNames.Duck)
    }
})
