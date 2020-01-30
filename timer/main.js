// setInterval(onIntervalNextTick, 1000);

const htmlElements = {};
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.stop');
htmlElements.resetBtn = document.querySelector('.container .buttons button.reset');
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
htmlElements.timer = document.querySelector('.container .links .timer');
htmlElements.output = document.querySelector('.container .output');
htmlElements.linksContainer = document.querySelector('.container .links');
htmlElements.linksArray = document.querySelectorAll('.container .links a');


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
})

let currentDate = new Date();    
htmlElements.clock = document.createElement('div');
htmlElements.clock.className = 'clock';
htmlElements.clock.innerHTML = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
htmlElements.output.append(htmlElements.clock);

function changeClock() {
    setTimeout( function() {
        
    }, 1000)
}

// setTimeout( function() {
//     let currentDate = new Date();

//     htmlElements.clock = document.createElement('div');
//     htmlElements.clock.className = 'clock';
//     htmlElements.clock.innerHTML = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
//     htmlElements.output.append(htmlElements.clock);
// }, 1000)




