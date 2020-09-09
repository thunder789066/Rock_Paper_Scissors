var result = document.getElementById("result");
//var button = document.getElementsByClassName("button");
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

function getResult(user_choice) {
    //getUser();
    user = user_choice;
    getAI();

    console.log(user);
    console.log(ai);
    console.log("-");

    if (user === 1) {    //rock
        if (ai === 1) {result.innerHTML = "AI chose rock. It's a Draw!"}
        if (ai === 2) {result.innerHTML = "AI chose paper. You Lose!"}
        if (ai === 3) {result.innerHTML = "AI chose scissors. You Win!"}
    } else if (user === 2) { //paper
        if (ai === 1) {result.innerHTML = "AI chose rock. You Win!"}
        if (ai === 2) {result.innerHTML = "AI chose paper. It's a Draw!"}
        if (ai === 3) {result.innerHTML = "AI chose scissors. You Lose!"}
    } else if (user === 3) { //scissor
        if (ai === 1) {result.innerHTML = "AI chose rock. You Lose!"}
        if (ai === 2) {result.innerHTML = "AI chose paper. You Win!"}
        if (ai === 3) {result.innerHTML = "AI chose scissors. It's a Draw!"}
    }
}

/*
function getUser(user_choice) {
    switch (user_choice) {
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
}*/

function getAI() {
    ai = Math.floor(Math.random() * 3) + 1;
}
