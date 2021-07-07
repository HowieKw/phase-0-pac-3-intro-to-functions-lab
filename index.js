function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase())
}
function logWhisper(string) {
    console.log(string.toLowerCase())
}
function sayHiToGrandma(string) {
    if(string === "I love you, Grandma.") {
        return "I love you, too."
    }  else if(string === shout(string)) {
        return "YES INDEED!"
    } else if(string === whisper(string)) {
        return "I can\'t hear you!"
    }
}

const string = "Hello!"

console.log(whisper(string))

console.log(sayHiToGrandma(whisper(string)))

console.log(shout(string))

console.log(sayHiToGrandma(shout(string)))

