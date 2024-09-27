let hour = document.querySelector("#hour")
let minute = document.querySelector("#minute")
let second = document.querySelector("#second")
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

