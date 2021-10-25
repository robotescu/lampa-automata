let lumina = 0
let strip = neopixel.create(DigitalPin.P2, 10, NeoPixelMode.RGB)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    lumina = input.lightLevel()
    if (lumina > 10 && lumina < 30) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (lumina <= 10) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    strip.show()
})
