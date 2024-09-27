let head = document.querySelector("#head")
let button = document.querySelector("#button")


let timer;
let num = 0

function startTimer() {
    timer = setInterval(function () {
        num++
        head.innerHTML = num
        } , 1000) 
    console.log(timer);
}