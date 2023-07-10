// * the goal:
// create noise map of 100*100 pixel

const canvas = document.getElementById('canvas')
const context = canvas.getContext("2d");
context.mozImageSmoothingEnabled = false;
const { height, width } = canvas

function getRandomNoise() {
    context.reset()
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            context.fillStyle = randomBlackWhite()
            context.fillRect(x, y, 1, 1)
        }
    }
}
function randomBlackWhite() {
    let NumberOfColors = 2
    let randomNumber = Math.floor(Math.random() * (NumberOfColors + 1))
    return `rgba(0,0,0,${randomNumber / NumberOfColors})`
}
function randomRGB() {
    let randomNumber = Math.floor(Math.random() * 3)
    let color = randomNumber == 0 ? 'red' : (randomNumber == 1 ? 'green' : 'blue')
    return `${color}`
}
function randomColor() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    return `rgb(${red},${green},${blue})`
}

setInterval(getRandomNoise, 50);
// getRandomNoise()