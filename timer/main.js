// setInterval(onIntervalNextTick, 1000);

const htmlElements = {};
let currentDate;
// let seconds;
// let minutes;
// let hours;

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

let timer = document.createElement('div');
timer.className = 'timer hidden';
timer.innerHTML = '0:00:00';
htmlElements.timer = htmlElements.output.appendChild(timer);


let clockTimerId = setTimeout(function clockConstraction() {
    currentDate = new Date();  
    let clock = {}; 
    clock.seconds = currentDate.getSeconds();
    clock.minutes = currentDate.getMinutes();
    clock.hours = currentDate.getHours();

    for (let key in clock) {
        if (clock[key].toString().length < 2) {
                clock[key] = '0' + clock[key];
        }        
    }

    htmlElements.clock.innerHTML = `${clock.hours}:${clock.minutes}:${clock.seconds}`;

    setTimeout (clockConstraction, 1000);
}, 0);


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
        htmlElements.clock.classList.add('hidden');
        htmlElements.timer.classList.remove('hidden');
        for(let i = 0; i < htmlElements.buttons.length; i++) {        
            htmlElements.buttons[i].classList.remove('hidden');            
        } 
    } else {
        htmlElements.clock.classList.remove('hidden');
        htmlElements.timer.classList.add('hidden');
        for(let i = 0; i < htmlElements.buttons.length; i++) {        
            htmlElements.buttons[i].classList.remove('hidden');
            htmlElements.buttons[i].classList.add('hidden');            
        } 
    }  
}

htmlElements.startBtn.addEventListener('click', function startStopWhatch() {
    let currentTime = htmlElements.startBtn.innerHTML;
    
})




