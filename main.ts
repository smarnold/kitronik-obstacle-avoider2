input.onButtonPressed(Button.A, function () {
    button = 1
})
input.onButtonPressed(Button.B, function () {
    button = 0
    Kitronik_Move_Motor.stop()
})
let distance = 0
let button = 0
button = 0
basic.forever(function () {
    if (button == 1) {
        Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
        distance = Kitronik_Move_Motor.measure()
        if (distance > 20) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 50)
        } else if (distance < 20) {
            Kitronik_Move_Motor.stop()
            basic.pause(500)
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 50)
            Kitronik_Move_Motor.stop()
            basic.pause(1000)
            Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 50)
            basic.pause(500)
            Kitronik_Move_Motor.stop()
        }
    }
})
