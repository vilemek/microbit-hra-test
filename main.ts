let game2 = 0
let tickspeed = 0
let multiplier = 0
let score = 0
input.onButtonPressed(Button.A, function () {
    if (led.point(1, 0)) {
        led.unplot(1, 0)
        led.plot(0, 0)
    }
    if (led.point(2, 0)) {
        led.unplot(2, 0)
        led.plot(1, 0)
    }
    if (led.point(3, 0)) {
        led.unplot(3, 0)
        led.plot(2, 0)
    }
    if (led.point(4, 0)) {
        led.unplot(4, 0)
        led.plot(3, 0)
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (game2 == 1) {
        if (led.point(3, 0)) {
            led.unplot(3, 0)
            led.plot(4, 0)
        }
        if (led.point(2, 0)) {
            led.unplot(2, 0)
            led.plot(3, 0)
        }
        if (led.point(1, 0)) {
            led.unplot(1, 0)
            led.plot(2, 0)
        }
        if (led.point(0, 0)) {
            led.unplot(0, 0)
            led.plot(1, 0)
        }
    } else {
    	
    }
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    if (game2 == 0) {
        tickspeed = 3000
        multiplier = 1
        basic.showNumber(3)
        basic.pause(100)
        basic.showNumber(2)
        basic.pause(100)
        basic.showNumber(1)
        basic.pause(100)
        basic.clearScreen()
        game2 = 1
        led.plot(2, 0)
    } else {
        game2 = 0
        basic.showString("" + (Math.trunc(score)))
    }
})
loops.everyInterval(10, function () {
    if (game2 == 0) {
        multiplier = 1
        tickspeed = 3000
    }
})
loops.everyInterval(tickspeed * 12, function () {
    if (game2 == 1) {
        tickspeed += 0 - randint(10, 20)
        multiplier += 0.02
    }
})
loops.everyInterval(tickspeed + 100, function () {
    if (game2 == 1) {
        score += (tickspeed - (tickspeed - 1)) * multiplier
    }
})
loops.everyInterval(tickspeed, function () {
    if (game2 == 1) {
        if (randint(0, 10) < randint(0, 10)) {
            led.plot(randint(0, 4), 4)
        }
    } else {
        game2 = 0
    }
})
loops.everyInterval(tickspeed, function () {
    if (game2 == 1) {
        if (led.point(0, 2)) {
            led.unplot(0, 2)
            led.plot(0, 1)
        }
        if (led.point(1, 2)) {
            led.unplot(1, 2)
            led.plot(1, 1)
        }
        if (led.point(2, 2)) {
            led.unplot(2, 2)
            led.plot(2, 1)
        }
        if (led.point(3, 2)) {
            led.unplot(3, 2)
            led.plot(3, 1)
        }
        if (led.point(4, 2)) {
            led.unplot(4, 2)
            led.plot(4, 1)
        }
    }
})
loops.everyInterval(tickspeed, function () {
    if (game2 == 1) {
        if (led.point(0, 3)) {
            led.unplot(0, 3)
            led.plot(0, 2)
        }
        if (led.point(1, 3)) {
            led.unplot(1, 3)
            led.plot(1, 2)
        }
        if (led.point(2, 3)) {
            led.unplot(2, 3)
            led.plot(2, 2)
        }
        if (led.point(3, 3)) {
            led.unplot(3, 3)
            led.plot(3, 2)
        }
        if (led.point(4, 3)) {
            led.unplot(4, 3)
            led.plot(4, 2)
        }
    }
})
loops.everyInterval(tickspeed, function () {
    if (game2 == 1) {
        if (led.point(0, 4)) {
            led.unplot(0, 4)
            led.plot(0, 3)
        }
        if (led.point(1, 4)) {
            led.unplot(1, 4)
            led.plot(1, 3)
        }
        if (led.point(2, 4)) {
            led.unplot(2, 4)
            led.plot(2, 3)
        }
        if (led.point(3, 4)) {
            led.unplot(3, 4)
            led.plot(3, 3)
        }
        if (led.point(4, 4)) {
            led.unplot(4, 4)
            led.plot(4, 3)
        }
    }
})
loops.everyInterval(tickspeed, function () {
    if (game2 == 1) {
        if (led.point(0, 1) && led.point(0, 0)) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.clearScreen()
            game2 = 0
            basic.showString("" + (Math.trunc(score)))
        } else if (led.point(1, 1) && led.point(1, 0)) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.clearScreen()
            game2 = 0
            basic.showString("" + (Math.trunc(score)))
        } else if (led.point(2, 1) && led.point(2, 0)) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.clearScreen()
            game2 = 0
            basic.showString("" + (Math.trunc(score)))
        } else if (led.point(3, 1) && led.point(3, 0)) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.clearScreen()
            game2 = 0
            basic.showString("" + (Math.trunc(score)))
        } else if (led.point(4, 1) && led.point(4, 0)) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.clearScreen()
            game2 = 0
            basic.showString("" + (Math.trunc(score)))
        } else {
        	
        }
    }
})
loops.everyInterval(tickspeed, function () {
    if (game2 == 1) {
        basic.pause(tickspeed)
        if (led.point(0, 1)) {
            led.unplot(0, 1)
            score += 1
        }
        if (led.point(1, 1)) {
            led.unplot(1, 1)
            score += 1
        }
        if (led.point(2, 1)) {
            led.unplot(2, 1)
            score += 1
        }
        if (led.point(3, 1)) {
            led.unplot(3, 1)
            score += 1
        }
        if (led.point(4, 1)) {
            led.unplot(4, 1)
            score += 1
        }
    }
})
