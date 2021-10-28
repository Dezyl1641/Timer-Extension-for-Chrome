let startingMinutes = document.getElementById('min').innerText;
startingMinutes = startingMinutes * 1;
let time = startingMinutes * 60 
let check = 0;
let startingSeconds = time % 60;

const countdownMin = document.getElementById('min');
const countdownSec = document.getElementById('sec');

setInterval(updateCountdown, 1000);

function updateCountdown(){
    
    if(check){
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds= seconds<10 ? '0' + seconds:seconds;
        // minutes= minutes<10 ? '0' + minutes:minutes;
        countdownMin.innerHTML = minutes;
        countdownSec.innerHTML =seconds;
        
        if(time==-1){
            window.alert("Time up!");
        }

        time--;
    }
}

let resetBtn = document.getElementById('reset');
resetBtn.addEventListener("click", reset);

let toggle = document.getElementById('toggle');
toggle.addEventListener("click", start);

let plus = document.getElementById('plus');
plus.addEventListener("click", add);

let minus = document.getElementById('minus');
minus.addEventListener("click", subtract);

function reset(){
    if(check){
        document.getElementById('min').innerHTML= '20';
        document.getElementById('sec').innerHTML= '00';
        time = startingMinutes * 60;
        check = 0;
        toggle.innerHTML = 'START';
    }
    
    else{
        document.getElementById('min').innerHTML= '20';
        document.getElementById('sec').innerHTML= '00';
        time = startingMinutes * 60;
        }
}

function add(){
    // check = 0;
    // toggle.innerHTML = 'Start';
    time = time + 60;
    document.getElementById('min').innerHTML= Math.floor(time / 60);
}

function subtract(){
    // check = 0;
    // toggle.innerHTML = 'Start';
    time = time - 60;
    document.getElementById('min').innerHTML= Math.floor(time / 60);
}

function start(){
    if(!check){
        check = 1;
        toggle.innerHTML = 'STOP';
    }

    else{
        check = 0;
        toggle.innerHTML = 'START';
    }
}