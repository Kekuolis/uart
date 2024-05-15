bluetooth.onBluetoothConnected(function () {
    connected = true
    basic.pause(1000)
})
bluetooth.onBluetoothDisconnected(function () {
    connected = false
    basic.showIcon(IconNames.No)
})
let limits = 0
let connected = false
let first_time = true
let Vanalog = 3.2
basic.forever(function () {
    if (first_time){
        basic.pause(2000)
        first_time = false
    }
    if (connected) {
        limits = randint(0, 1023)
        pins.analogWritePin(AnalogPin.P3, limits)
        basic.pause(100)
        let rez = (pins.analogReadPin(AnalogPin.P3) * Vanalog / 1023).toString()
        bluetooth.uartWriteBuffer(Buffer.fromUTF8(rez))
        bluetooth.uartWriteBuffer(Buffer.fromUTF8('\n'))
    }
    // Add a delay between iterations
})
