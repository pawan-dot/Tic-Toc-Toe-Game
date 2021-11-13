console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// Function to check for a win
const checkWin = () => {
    let boxText = document.getElementsByClassName('boxText');//get all boxText 
    let wins = [
        [0, 1, 2, 5, 5, 0],//1st first row//5-x trancelate,15-y trancelate 90-rotation for cut line
        [3, 4, 5, 5, 15, 0],//2nd row/5-x trancelate,15-y trancelate 0-rotation for cut line etc
        [6, 7, 8, 5, 25, 0],//third row
        [0, 3, 6, -5, 15, 90],//first column
        [1, 4, 7, 5, 15, 90],//2nd column
        [2, 5, 8, 15, 15, 90],//3rd column
        [0, 4, 8, 5, 15, 45],//1 digonal
        [2, 4, 6, 5, 15, 135],//2 digonal
    ]
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "215px";//when win width 215 set  is that is gif come dislay
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`//line transeform in  2nd row row
            document.querySelector(".line").style.width = "20vw";//come line with 20vw when finish game
        }
    })
}

// Game Logic
//music.play()
let boxes = document.getElementsByClassName("box");//get all box and /it is return html collection
Array.from(boxes).forEach(element => {///use array to use forEach
    let boxText = element.querySelector('.boxText');//select all boxText 
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {//when text 0
            boxText.innerText = turn;//show rurn
            turn = changeTurn();//change turn
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;//who win the game
            }
        }
    })
})

// // Add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxTexts = document.querySelectorAll('.boxText');//select all boxText/it is return html collection
    Array.from(boxTexts).forEach(element => {//use array to use forEach
        element.innerText = ""//do intter text blank 
    });
    turn = "X";//after reset again do turn X
    isgameover = false//again game start
    document.querySelector(".line").style.width = "0vw";//when reset ,line width do 0 that is remove line
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"//when reset width set is 0  that is gif remove 
})

