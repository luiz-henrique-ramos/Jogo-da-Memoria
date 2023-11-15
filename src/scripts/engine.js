const emojis = [
    "😋",
    "😋",
    "🥵",
    "🥵",
    "🤡",
    "🤡",
    "🤓",
    "🤓",
    "🥶",
    "🥶",
    "👀",
    "👀",
    "😎",
    "😎",
    "🐱‍👤",
    "🐱‍👤"
];
let openCards = [];
let autorize = true;
let interval;

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1 ));

for(let i=0; i < emojis.length; i++)
{
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").
    appendChild(box);
}

function handleClick() {
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if(openCards.length == 2){
        setTimeout(checkMatch, 500);
    }
}

function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch")
        openCards[1].classList.add("boxMatch")
    }else{
        openCards[0].classList.remove("boxOpen")
        openCards[1].classList.remove("boxOpen")
    }

    openCards = [];

    if(document.querySelectorAll(".boxMatch").length == emojis.length){
        alert("Você venceu !");
        stopGame();
    }
}

let time = 60;

function timePass() {
    time--;

    if (time == 0) {
        alert("GAME OVER!!!")
        stopGame();
    }

    if (time <= 10) {

    }

    let seconds = document.querySelector(".second");
    seconds.textContent = time;
}

function init() {
    interval = setInterval(timePass, 1000);
}

function stopGame() {
    clearInterval(interval);
}

init();