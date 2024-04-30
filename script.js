const timerElement=document.getElementById('timer');
const startbutton=document.getElementById('start');
const stopbutton=document.getElementById('stop');
const resetbutton=document.getElementById('reset');

let timerInterval;
let hours=0;
let minutes=0;
let seconds=0;
let milliseconds=0;

startbutton.addEventListener('click',startStopwatch);
stopbutton.addEventListener('click',stopStopwatch);
resetbutton.addEventListener('click',resetStopwatch);

function startStopwatch(){
    startbutton.disabled=true;
    stopbutton.disabled=false;

    timerInterval=setInterval(updatetime,10);
}

function stopStopwatch(){
    startbutton.disabled=false;
    stopbutton.disabled=true;

    clearInterval(timerInterval);
}

function resetStopwatch(){
    startbutton.disabled=false;
    stopbutton.disabled=true;

    clearInterval(timerInterval);
    hours=0;
    minutes=0;
    seconds=0;
    milliseconds=-1;
    resettime();
}

function pad(number){
    return number<10?'0'+number:number;
}

function updatetime(){
    milliseconds++;
    if(milliseconds===100){
        milliseconds=0;
        seconds++;
        if(seconds===60){
            seconds=0;
            minutes++;
            if(minutes===60){
                minutes=0;
                hours++;
            }
        }
    }
    let newtime=pad(hours)+":"+pad(minutes)+":"+pad(seconds)+"."+pad(milliseconds);
    timerElement.textContent=newtime;
}

function resettime(){
    timerElement.textContent='00:00:00'
}