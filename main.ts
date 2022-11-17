input.onButtonPressed(Button.A, function () {
    if (playerPosition > 0) {
        led.unplot(playerPosition, 4)
        playerPosition += -1
        led.plot(playerPosition, 4)
    }
})
function doSomething (bulletPosition: number) {
    for (let index = 0; index <= 4; index++) {
        led.plot(bulletPosition, (index - 3) * -1)
        basic.pause(200)
        led.unplot(bulletPosition, (index - 3) * -1)
    }
}
input.onButtonPressed(Button.AB, function () {
    if (bulletCount == 0) {
        bulletCount += 1
        doSomething(playerPosition)
        bulletCount += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (playerPosition < 4) {
        led.unplot(playerPosition, 4)
        playerPosition += 1
        led.plot(playerPosition, 4)
    }
})
let playerPosition = 0
let bulletCount = 0
bulletCount = 0
playerPosition = 2
led.plot(playerPosition, 4)
basic.forever(function () {
	
})
