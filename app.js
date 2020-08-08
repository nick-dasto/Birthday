const timer = document.getElementById('timer');

setInterval(tick, 1000);

function tick(){
    const currentTime = new Date();
    const takeoff = new Date(2020, 7, 8);
    const timeLeft = takeoff - currentTime;

    let days = Math.floor(timeLeft/86400000),
    seconds = Math.floor((timeLeft/ 1000) % 60),
    minutes = Math.floor((timeLeft/ (1000 * 60)) % 60),
    hours = Math.floor((timeLeft/ (1000 * 60 * 60)) % 24);

  days = (days < 10) ? "0"+ days : (days < 0) ? "00" :  days;
  hours = (hours < 10) ? "0" + hours : (hours < 0) ? "00" : hours;
  minutes = (minutes < 10) ? "0" + minutes : (minutes < 0) ? "00" : minutes;
  seconds = (seconds < 10) ? "0" + seconds : (seconds < 0) ? "00" : seconds;

  const countDown = `${days}:${hours}:${minutes}:${seconds}`;

  return timer.innerText = countDown;

}

