var result = document.getElementById("result");
var user = 0;
var ai = 0;

clear();

function clear() {
    result.innerHTML = "";
    user = 0;
    ai = 0;
}

function getResult(user_choice) {
    user = user_choice;
    getAI();

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

function getAI() {
    ai = Math.floor(Math.random() * 3) + 1;
}
