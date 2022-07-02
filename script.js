const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const width = canvas.width
const height = canvas.height


const playerSize = 50; 
let keranjangLocation = {x: width /2, y: height - playerSize}
let alphaLocation = {x: Math.floor(Math.random() * (width / playerSize)) * playerSize /2, y: 0}
let betaLocation = {x: Math.floor(Math.random() * (width / playerSize)) * playerSize /2, y: 50}
let gammaLocation = {x: Math.floor(Math.random() * (width / playerSize)) * playerSize /2, y: 100}
let deltaLocation = {x: Math.floor(Math.random() * (width / playerSize)) * playerSize /2, y: 150}
let omicronLocation = {x: Math.floor(Math.random() * (width / playerSize)) * playerSize /2, y: 200}
let score = 0;


let background = new Image()
background.src = './assets/background.png'

let keranjang = new Image()
keranjang.src = './assets/basket.png'

let alpha = new Image()
alpha.src = './assets/alpha.png'

let beta = new Image()
beta.src = './assets/beta.png'

let gamma = new Image()
gamma.src = './assets/gamma.png'

let delta = new Image()
delta.src = './assets/delta.png'

let omicron = new Image()
omicron.src = './assets/omicron.png'


let time = 0
let gameloop

let gameSpeed = 200
window.onload = () => {
    gameloop = setInterval(draw, gameSpeed)
    document.onkeydown = controller
    setInterval(timer, 1000)
}

const timer = () => {
    time++
    if (time == 60) {
        prompt("Masukkan Nama Anda")
        alert(`Highscore : ${score}`)
        clearInterval(gameloop)
    }
}

const draw = () => {
    drawBackground()
    drawEnemyAlpha()
    drawEnemyBeta()
    drawEnemyGamma()
    drawEnemyDelta()
    drawEnemyOmicron()
    drawKeranjang()
    drawScore()
    collisionEnemy()
    gameloop = setInterval(gameSpeed)
    
}

const drawScore = () => {
    ctx.fillStyle = "white"
    ctx.fillText(`Score: ${score}` ,10,20)
    ctx.fillText(`Timer: ${time}` ,10,40)
}

const drawBackground = () => {
    ctx.drawImage(background,0,0,width,height)
    ctx.fillStyle = "black"
    ctx.fillRect(0,0, 60, 50)
}

const drawKeranjang = () =>{
    ctx.drawImage(keranjang,keranjangLocation.x,keranjangLocation.y , playerSize, playerSize)

}

const drawEnemyAlpha = () => {
    ctx.drawImage(alpha,alphaLocation.x,alphaLocation.y,playerSize,playerSize)

    alphaLocation.y += playerSize
}

const drawEnemyBeta = () => {
    ctx.drawImage(beta,betaLocation.x,betaLocation.y,playerSize,playerSize)

    betaLocation.y += playerSize
}

const drawEnemyGamma = () => {
    ctx.drawImage(gamma,gammaLocation.x,gammaLocation.y,playerSize,playerSize)

    gammaLocation.y += playerSize
}

const drawEnemyDelta = () => {
    ctx.drawImage(delta,deltaLocation.x,deltaLocation.y,playerSize,playerSize)

    deltaLocation.y += playerSize
}

const drawEnemyOmicron = () => {
    ctx.drawImage(omicron,omicronLocation.x,omicronLocation.y,playerSize,playerSize)

    omicronLocation.y += playerSize
}


const collisionEnemy = () => {

    // Alpha
    if (keranjangLocation.x == alphaLocation.x && keranjangLocation.y - playerSize == alphaLocation.y ) {
        alphaLocation.y = 0
        alphaLocation.x = Math.floor(Math.random() * (width / playerSize)) * playerSize

        gameSpeed -=10
        score++
        let tangkap = new Audio('./assets/tangkap.wav')
        tangkap.play()
    }

    if (alphaLocation.y == height) {
        alphaLocation.y = 0
        alphaLocation.x = Math.floor(Math.random() * (width / playerSize)) * playerSize
        score--
    }
// Beta

if (keranjangLocation.x == betaLocation.x && keranjangLocation.y - playerSize == betaLocation.y ) {
    betaLocation.y = 0
    betaLocation.x = Math.floor(Math.random() * (width / playerSize)) * playerSize

    gameSpeed -=10
    score +=2
    let tangkap = new Audio('./assets/tangkap.wav')
    tangkap.play()
}
if (betaLocation.y == height) {
    betaLocation.y = 0
    betaLocation.x = Math.floor(Math.random() * (width / playerSize)) * playerSize
    score--
}
// Gamma
if (keranjangLocation.x == gammaLocation.x && keranjangLocation.y - playerSize == gammaLocation.y ) {
    gammaLocation.y = 0
    gammaLocation.x = Math.floor(Math.random() * (width / playerSize)) * playerSize

    gameSpeed -=10
    score +=3
    let tangkap = new Audio('./assets/tangkap.wav')
    tangkap.play()
}
if (gammaLocation.y == height) {
    gammaLocation.y = 0
    gammaLocation.x = Math.floor(Math.random() * (width / playerSize)) * playerSize
    score--
}

// Delta
if (keranjangLocation.x == deltaLocation.x && keranjangLocation.y - playerSize == deltaLocation.y ) {
    deltaLocation.y = 0
    deltaLocation.x = Math.floor(Math.random() * (width / playerSize)) * playerSize

    gameSpeed -=10
    score +=4
    let tangkap = new Audio('./assets/tangkap.wav')
    tangkap.play()
}
if (deltaLocation.y == height) {
    deltaLocation.y = 0
    deltaLocation.x = Math.floor(Math.random() * (width / playerSize)) * playerSize
    score--
}

// Omicron
if (keranjangLocation.x == omicronLocation.x && keranjangLocation.y - playerSize == omicronLocation.y ) {
    omicronLocation.y = 0
    omicronLocation.x = Math.floor(Math.random() * (width / playerSize)) * playerSize

    gameSpeed -=10
    score +=5
    let tangkap = new Audio('./assets/tangkap.wav')
    tangkap.play()
}
if (omicronLocation.y == height) {
    omicronLocation.y = 0
    omicronLocation.x = Math.floor(Math.random() * (width / playerSize)) * playerSize
    score--
}

console.log(gameSpeed);

}


const controller = (e) => {
    if (e.key == "ArrowLeft") {
        keranjangLocation.x -= playerSize
    }else if (e.key == "ArrowRight") {
        keranjangLocation.x += playerSize
    }

    if (keranjangLocation.x < 0) {
        keranjangLocation.x = 0
    }else if (keranjangLocation.x > width - playerSize) {
        keranjangLocation.x = width -playerSize
    }
}