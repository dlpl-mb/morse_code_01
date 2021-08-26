input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 5; index++) {
        basic.showString("" + (alphabet[index]))
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        basic.showString("" + (alphabet[index]))
        morse = morsecodes[index]
        for (let _symbol = 0; _symbol <= morse.length; _symbol++) {
            let morse_teil = 0
            basic.showString(morse.charAt(morse_teil))
            basic.pause(500)
            basic.clearScreen()
        }
    }
})
let morse = ""
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
