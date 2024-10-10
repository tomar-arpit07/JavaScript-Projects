console.log("Welcome to Tic Tac Toe");
const music = new Audio("music.mp3");
const gameoverMusic = new Audio("gameover.mp3");
const turnMusic = new Audio("ting.mp3");
let turn = "X";
let isgameOver = false;

// let playMusic = document.querySelector(".playmusic");
// playMusic.addEventListener("click", music.p);

const checkWin = () =>{
    let textbox = document.querySelectorAll(".boxtext");
    let wins = [
        [0,1,2,2,4,0],
        [3,4,5,2,12,0],
        [6,7,8,2,20,0],
        [0,3,6,-6,12,90],
        [1,4,7,2,12,90],
        [2,5,8,10,12,90],
        [0,4,8,2,12,45],
        [2,4,6,2,12,135],
    ]
    wins.forEach(e =>{
        if((textbox[e[0]].innerText !== "") && (textbox[e[0]].innerText === textbox[e[1]].innerText) && (textbox[e[1]].innerText === textbox[e[2]].innerText)){
            document.querySelector(".turninfo").innerText = textbox[e[0]].innerText + " Won";
            isgameOver = true;
            gameoverMusic.play();
            document.querySelector(".gameinfo").querySelector("img").style.width = "200px";
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

let changeTurn = () =>{
   return turn === "X"? "0": "X";
}

let boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach(element => {
    let textboxes = element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(textboxes.innerText === ''){
            textboxes.innerText = turn;
            turnMusic.play();
            turn = changeTurn();
            checkWin();
            if(!isgameOver){
                document.querySelector(".turninfo").innerText = "Turn for " + turn;
            }
        }
    })
})

let reset = document.querySelector(".info").querySelector("button");
reset.addEventListener('click',() =>{
    let textbox = document.querySelectorAll(".boxtext");
    Array.from(textbox).forEach(element =>{
        element.innerText = "";
    })
    turn = "X";
    isgameOver = false;
    document.querySelector(".gameinfo").querySelector("img").style.width = "0px";
    document.querySelector(".turninfo").innerText = "Turn for " + turn;
    document.querySelector(".line").style.width = "0vw";
})