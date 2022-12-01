input.onButtonPressed(Button.A, function () {
    if (playerPosition > 0) {
        ledArray[playerPosition][4] = 0
        playerPosition += -1
        ledArray[playerPosition][4] = 1
    }
})
//function doSomething (bulletPosition: number) {
//    for (let index = 0; index <= 4; index++) {
//        led.plot(bulletPosition, (index - 3) * -1)
//        basic.pause(200)
//        led.unplot(bulletPosition, (index - 3) * -1)
//    }
//}
input.onButtonPressed(Button.AB, function () {
    if (bulletCount == 0) {
        bulletCount += 1
        //doSomething(playerPosition)
        bulletPosition = 3
        bulletStart = playerPosition
    }
})
input.onButtonPressed(Button.B, function () {
    if (playerPosition < 4) {
        ledArray[playerPosition][4] = 0
        playerPosition += 1
        ledArray[playerPosition][4] = 1
    }
})
let playerPosition = 0
let bulletCount = 0
let bulletPosition = 0
let bulletStart = 0
let ledArray: number[][] = []
ledArray = [
[
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0
]
]
bulletCount = 0
playerPosition = 2
ledArray[playerPosition][4] = 1
basic.forever(function () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++){
            if (ledArray[i][j] == 0){
                led.unplot(i,j)
            } else if (ledArray[i][j] == 1){
                led.plot(i,j)
            }
        }
    }

    if(bulletCount == 1 && bulletPosition >= 0){
        ledArray[bulletStart][bulletPosition] = 0
        bulletPosition--
         
        ledArray[bulletStart][bulletPosition] = 1
    } else if (bulletCount == 1 && bulletPosition == -1){
        bulletCount = 0
    }
    basic.pause(20)
})
