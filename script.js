var result = document.getElementById("result");
var button = document.getElementsByClassName("button");
//var rock = document.getElementById("img1_btn");
//var paper = document.getElementById("img2_btn");
//var scissors = document.getElementById("img3_btn");
var user = 0;
var ai = 0;

clear();

function clear() {
    result.innerHTML = "";
    user = 0;
    ai = 0;
}

function getResult() {
    getUser();
    getAI();

    if (user === 1) {    //rock
        if (ai === 1) {result.innerHTML = "It's a Draw!"}
        if (ai === 2) {result.innerHTML = "You Lose!"}
        if (ai === 3) {result.innerHTML = "You Win!"}
    } else if (user === 2) { //paper
        if (ai === 1) {result.innerHTML = "You Win!"}
        if (ai === 2) {result.innerHTML = "It's a Draw!"}
        if (ai === 3) {result.innerHTML = "You Lose!"}
    } else if (user === 3) { //scissor
        if (ai === 1) {result.innerHTML = "You Lose!"}
        if (ai === 2) {result.innerHTML = "You Win!"}
        if (ai === 3) {result.innerHTML = "It's a Draw!"}
    }
}

function getUser() {
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function () {
            switch (this.innerHTML) {
                case "Rock": {
                    user = 1;
                    break;
                }
                case "Paper": {
                    user = 2;
                    break;
                }
                case "Scissor": {
                    user = 3;
                    break;
                }
                default: {
                    break;
                }
            }
        })
    }
}

function getAI() {
    ai = Math.floor(Math.random() * 3) + 1;
}
