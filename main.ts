basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        servos.P0.setAngle(180)
    }
    while (input.buttonIsPressed(Button.A)) {
        servos.P0.setAngle(180)
    }
})
