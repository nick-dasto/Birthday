const timer = document.getElementById('timer');

setInterval(tick, 1000);

function tick(){
    const currentTime = new Date();
    const takeoff = new Date(2020, 7, 8);
    const timeLeft = takeoff - currentTime;

    let days = Math.floor(timeLeft/86400000)
    let seconds = Math.floor((timeLeft/ 1000) % 60)
    let secondsMark = Math.floor((timeLeft/ 1000) % 60)
    let minutes = Math.floor((timeLeft/ (1000 * 60)) % 60)
    let hours = Math.floor((timeLeft/ (1000 * 60 * 60)) % 24);

    days = (days < 0) ? "00" : (days < 10) ? "0"+ days : days;
    hours = (hours < 0) ? "00" : (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 0) ? "00" : (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 0) ? "00" : (seconds < 10) ? "0" + seconds : seconds;

    let marks = (days === "00" && hours === "00" && minutes === "00" && seconds === "00") ? 
      "!".repeat(Math.abs(secondsMark)%10) : ""
    
    const countDown = `${days}:${hours}:${minutes}:${seconds}${marks}`;

  return timer.innerText = countDown;

}

