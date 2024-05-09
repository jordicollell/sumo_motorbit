function davant () {
    motorbit.forward(50)
    alerta = 0
    sensor_davant_dret = pins.digitalReadPin(DigitalPin.P6)
    sensor_davant_esquerra = pins.digitalReadPin(DigitalPin.P7)
    while (sensor_davant_dret == 0 && (sensor_davant_esquerra == 0 && alerta == 0)) {
        sonar2 = sonar.ping(
        DigitalPin.P15,
        DigitalPin.P16,
        PingUnit.Centimeters
        )
        sensor_davant_esquerra = pins.digitalReadPin(DigitalPin.P6)
        sensor_davant_dret = pins.digitalReadPin(DigitalPin.P7)
        if (sonar2 > 2 && sonar2 < 25) {
            alerta = 1
        }
    }
    if (sensor_davant_dret == 1 || sensor_davant_esquerra == 1) {
        GIRAR_VINGUENT_DAVANT()
    } else {
        darrere()
    }
}
function GIRAR_VINGUENT_DAVANT () {
    motorbit.back(50)
    basic.pause(800)
    motorbit.brake()
    gir = randint(0, 1)
    if (gir == 0) {
        motorbit.freestyle(50, -50)
    } else {
        motorbit.freestyle(-50, 50)
    }
    temps_de_gir = randint(400, 1000)
    basic.pause(temps_de_gir)
    motorbit.brake()
    basic.pause(100)
    davant()
}
function darrere () {
    motorbit.back(50)
    sensor_darrera_esquerra = pins.digitalReadPin(DigitalPin.P13)
    sensor_darrera_dret = pins.digitalReadPin(DigitalPin.P14)
    while (sensor_darrera_dret == 0 && sensor_darrera_esquerra == 0) {
        sensor_darrera_esquerra = pins.digitalReadPin(DigitalPin.P13)
        sensor_darrera_dret = pins.digitalReadPin(DigitalPin.P14)
    }
    GIRAR_VINGUENT_DARRERA2()
}
function GIRAR_VINGUENT_DARRERA2 () {
    motorbit.forward(50)
    basic.pause(800)
    sonar2 = sonar.ping(
    DigitalPin.P15,
    DigitalPin.P16,
    PingUnit.Centimeters
    )
    if (sonar2 > 2 && sonar2 < 25) {
        darrere()
    }
    gir = randint(0, 1)
    if (gir == 0) {
        motorbit.freestyle(50, -50)
    } else {
        motorbit.freestyle(-50, 50)
    }
    temps_de_gir = randint(400, 1000)
    basic.pause(temps_de_gir)
    basic.pause(100)
    davant()
}
let sensor_darrera_dret = 0
let sensor_darrera_esquerra = 0
let temps_de_gir = 0
let gir = 0
let sonar2 = 0
let sensor_davant_esquerra = 0
let sensor_davant_dret = 0
let alerta = 0
basic.showLeds(`
    . . . . .
    . . . . .
    # . . . #
    . . . . .
    . . . . .
    `)
// Botó (A) activat=0
// Botó (B)
while (pins.digitalReadPin(DigitalPin.P5) == 1 && pins.digitalReadPin(DigitalPin.P11) == 1) {
	
}
basic.clearScreen()
led.plot(2, 2)
basic.pause(3000)
led.enable(false)
davant()
