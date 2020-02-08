// setInterval(onIntervalNextTick, 1000);

const htmlElements = {};
let currentDate;
let clockTimerId;
let stopWhatchId;

htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.stop');
htmlElements.resetBtn = document.querySelector('.container .buttons button.reset');
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
htmlElements.timer = document.querySelector('.container .links .timer');
htmlElements.output = document.querySelector('.container .output');
htmlElements.linksContainer = document.querySelector('.container .links');
htmlElements.linksArray = document.querySelectorAll('.container .links a');
htmlElements.buttons = document.querySelectorAll('.container .buttons button')

let clock = document.createElement('div');
clock.className = 'clock';
htmlElements.clock = htmlElements.output.appendChild(clock);


function clockConstraction() {
    currentDate = new Date();  

    let time = {}; 
    time.seconds = timeFormat(currentDate.getSeconds());
    time.minutes = timeFormat(currentDate.getMinutes());
    time.hours = timeFormat(currentDate.getHours());
 
    htmlElements.clock.innerHTML = `${time.hours}:${time.minutes}:${time.seconds}`;

    clockTimerId = setTimeout (clockConstraction, 1000);
}

clockConstraction();

function timeFormat(a) {
    if (a.toString().length < 2) {
       return a = `0${a}`;
    }  else {
        return a;
    }
}

htmlElements.linksContainer.addEventListener('click', function(event) {
    const targetObj = event.target;

    if (targetObj.tagName == 'A') {
        for (let i = 0; i < htmlElements.linksArray.length; i++) {
            if (htmlElements.linksArray[i].innerHTML == targetObj.innerHTML) {
                htmlElements.linksArray[i].classList.add('selected');
            } else {
                htmlElements.linksArray[i].classList.remove('selected');
            }
        }
    }

    showTimer();      
})

function showTimer() {
    if (htmlElements.stopwatch.classList.contains('selected')) {
        for(let i = 0; i < htmlElements.buttons.length; i++) {        
            htmlElements.buttons[i].classList.remove('hidden');     
            clearTimeout(clockTimerId);
            htmlElements.clock.innerHTML = '00:00:00';        
        } 
    } else {
        for(let i = 0; i < htmlElements.buttons.length; i++) {  
            htmlElements.buttons[i].classList.add('hidden');   
            sclearTimeout(stopWhatchId);     
            clockConstraction();               
        } 
    }  
}

htmlElements.startBtn.addEventListener('click', function startStopWhatch() {
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    setTimeout(function stopWhatchTick() {
        if (seconds < 60) {
            seconds = +seconds +1;
        } else if (minutes < 60) {
            minutes = +minutes + 1;
            seconds = 0;
        } else if (hours < 24) {
            hours = +hours + 1;
            minutes = 0;
        } else {
            days = 1;
        }

        hours = timeFormat(hours);
        minutes = timeFormat(minutes);
        seconds = timeFormat(seconds);

        if (days == 0) {
            htmlElements.output.innerHTML = `${hours}:${minutes}:${seconds}`;
        } else {
            htmlElements.output.innerHTML = `${days} days ${hours}:${minutes}:${seconds}`;
        }
    
        stopWatchId = setTimeout(stopWhatchTick, 1000);
    }, 1000);    
})




