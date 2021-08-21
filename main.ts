input.onButtonPressed(Button.A, function () {
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallSquare)
    }
})
basic.forever(function () {
	
})
