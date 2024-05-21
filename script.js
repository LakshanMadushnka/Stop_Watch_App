let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timmer = null;

function stopwatch()
{
    seconds++

    if(seconds == 60)
    {
        seconds=60;
        minutes++;

        if(minutes==60)
        {
            minutes=0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;


    displayTime.innerHTML = h +":"+ m + ":" + s;
}


function watchStart()
{
    if(timmer !== null)
    {
        clearInterval(timmer);
    }
    timmer =setInterval(stopwatch,1000);
}

function watchStop()
{
    clearInterval(timmer);
}

function watchRest()
{
    clearInterval(timmer);
    let [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
}