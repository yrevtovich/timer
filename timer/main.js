// setInterval(onIntervalNextTick, 1000);

const htmlElements = {};
let currentDate;
let stopWatchId = 0;

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

function clockConstraction() {
    currentDate = new Date();  

    let time = {}; 
    time.seconds = timeFormat(currentDate.getSeconds());
    time.minutes = timeFormat(currentDate.getMinutes());
    time.hours = timeFormat(currentDate.getHours());
 
    htmlElements.output.innerHTML = `${time.hours}:${time.minutes}:${time.seconds}`;

    clockTimerId = setTimeout (clockConstraction, 1000);
}

let clockTimerId = setTimeout(clockConstraction, 0);

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
    showClock();
    showStopwatch();  
    showTimer()    
})

function showClock() {
    if (htmlElements.clock.classList.contains('selected')) {
        clockTimerId = setTimeout(clockConstraction, 0);
    }  
}

function showStopwatch() {
    if (htmlElements.stopwatch.classList.contains('selected')) {
        for(let i = 0; i < htmlElements.buttons.length; i++) {        
            htmlElements.buttons[i].classList.remove('hidden');                
        } 

        clearTimeout(clockTimerId);
        htmlElements.output.innerHTML = '00:00:00';              
    } else { 
        for(let i = 0; i < htmlElements.buttons.length; i++) {  
            htmlElements.buttons[i].classList.add('hidden');               
        } 

        clearTimeout(stopWatchId);  
    }  
}

function showTimer() {
    if (htmlElements.timer.classList.contains('selected')) {
        htmlElements.output.innerHTML = '00:00:00';   
    }  
}

htmlElements.startBtn.addEventListener('click', startStopWhatch);

htmlElements.stopBtn.addEventListener('click', stopStopWatch);

htmlElements.resetBtn.addEventListener('click', resetStopWatch);

function startStopWhatch() {
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    let currentTime = htmlElements.output.innerHTML;

    if (currentTime != '00:00:00') {
        let currentTimeArray = currentTime.split(':');
        
        if (currentTimeArray.length = 3) {
            hours = currentTimeArray[0];
            minutes = currentTimeArray[1];
            seconds = currentTimeArray[2];
        } else {
            days = currentTimeArray[0];
            hours = currentTimeArray[1];
            minutes = currentTimeArray[2];
            seconds = currentTimeArray[3];
        }
    }

    stopWatchId = setTimeout(function stopWhatchTick() {
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
}

function stopStopWatch() {
    clearTimeout(stopWatchId); 
}

function resetStopWatch() {
    stopStopWatch();
    htmlElements.output.innerHTML = '00:00:00';
}