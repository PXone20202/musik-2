basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    basic.setLedColor(0xff0000)
    basic.pause(100)
    basic.setLedColor(0xff8000)
    basic.pause(100)
    basic.setLedColor(0xffff00)
    basic.pause(100)
    basic.setLedColor(0x00ff00)
    basic.pause(100)
    basic.setLedColor(0x00ffff)
    basic.pause(100)
    basic.setLedColor(0x007fff)
    basic.pause(100)
    basic.setLedColor(0x0000ff)
    basic.pause(100)
    basic.setLedColor(0x7f00ff)
    basic.pause(100)
    basic.setLedColor(0xb09eff)
    basic.pause(100)
    basic.setLedColor(0xff00ff)
    basic.pause(100)
    basic.setLedColor(0xff0080)
    basic.pause(100)
})
