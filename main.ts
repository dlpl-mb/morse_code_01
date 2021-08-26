input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 6; index++) {
        basic.showString("" + (alphabet[index]))
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 6; index++) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
        basic.showString("" + (alphabet[index]))
        basic.clearScreen()
        morsezeichen = morsecodes[index]
        for (let morse_teil = 0; morse_teil <= morsezeichen.length - 1; morse_teil++) {
            if (true) {
            	
            } else {
            	
            }
            basic.showString("Hello!")
            basic.pause(500)
            basic.clearScreen()
        }
        basic.pause(1000)
    }
})
let morsezeichen = ""
let morsecodes: string[] = []
let alphabet: string[] = []
alphabet = [
"A",
"B",
"C",
"D",
"E",
"F",
"G"
]
morsecodes = [
".-",
"-...",
"-.-.",
"-..",
".",
"..-.",
"--."
]
