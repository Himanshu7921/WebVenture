// Variables for buttons 

const startStopBtn = document.querySelector('.startStopBtn');
const resetBtn = document.querySelector('.resetBtn');

// Variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Stop Watch Function

function stopWatch(){
    seconds++;
    if (seconds >= 60){
        seconds = 0;
        minutes++;
    }

    if (minutes >= 60){
        minutes = 0;
        hours++;
    }

    if (seconds < 10 ){
        leadingSeconds = "0" + seconds.toString();
    }else{
        leadingSeconds = seconds;
    }
    if (minutes< 10 ){
        leadingMinutes = "0" + minutes.toString();
    }else{
        leadingMinutes = minutes;
    }
    if (hours < 9 ){
        leadingHours = "0" + hours.toString();
    }else{
        leadingHours = hours;
    }
   
    let displayTimer = document.querySelector('.timer').innerText = 
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// Variables for leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0



// window.setInterval(stopWatch,1);

