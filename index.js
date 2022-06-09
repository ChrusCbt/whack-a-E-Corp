let gameStart = false
const playBtn = document.querySelector('.play')
const board = document.querySelector('.holes')
let holesArr = document.querySelectorAll('.hole') // selects everything with the class 'hole'
const scoreKeep = document.querySelector('.score')
let score = 0
const timeLeft = document.querySelector('.timer')
let time = 10


playBtn.addEventListener('click' , () => {
    if (gameStart === false){
      startGame()
      timeLeft.innerHTML = '10'
    }  
})

for(i = 0; i < holesArr.length; i++){
    let currentDiv = holesArr[i]
    currentDiv.addEventListener('click', (e) => {
   if(e.target.style.backgroundImage && gameStart === true){
    scoreKeep.innerHTML = ++score 

    let border = setInterval(() => {
        board.style.borderColor = 'green'
    }, 100);

    setTimeout(() => {
        board.style.borderColor = 'red'
        clearInterval(border)
    }, 300);
   } 
    })
}

const startGame = () => {
    gameStart = true
    board.classList.remove('hide')
    scoreKeep.innerHTML = 0


    let timeInterval = setInterval(() => {
        timeLeft.innerHTML = --time
    }, 1000);

    let interval = setInterval(() => {
        const random = Math.floor(Math.random() * 9) // create a random number between 0 and 8 
        holesArr[random].style.backgroundImage = "url('https://picfiles.alphacoders.com/261/thumb-261904.png')"; //image pops up in a random box (div) 
        setTimeout(() => {
            holesArr[random].style.backgroundImage = ''
        }, 600);
    },600);

    // game over
    setTimeout(() => {
        clearInterval(interval)
        clearInterval(timeInterval)
        endGame()
    }, 10000);
}

const endGame = () => {
    score = 0
    time = 10
    playBtn.innerHTML = 'Play Again'
    timeLeft.innerHTML = '0'
    gameStart = false
}

