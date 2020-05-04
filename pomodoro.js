// boolean variable that indicates that the counting is finished
var finished = true;

function ShowTime(minutes, seconds, tmax, counter_id) {
    minutes = Math.floor(Number(tmax) - Number(minutes) - 1);
    seconds = 59 - Number(seconds);
    if(minutes < 0) {
        minutes = 0;
    }
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById(counter_id).innerHTML = minutes+":"+seconds;
}

function Counting(tmax, counter_id, audio_id) {
    var seconds = 0;
    var minutes = 0;
    finished = false;
    
    if(finished == false) {
    funcao_contagem = setInterval(function(){
        seconds = seconds +1;
        if(seconds == 60) {
            seconds = 0;
            minutes = minutes + 1;
        }
        if(minutes == tmax) {
            seconds = 59;
            finished = true;
            clearInterval(funcao_contagem);
            document.getElementById(audio_id).currentTime = 0;
            document.getElementById(audio_id).play();
            console.log("Couting is finished. Playing the alarm");
        }
        ShowTime(minutes, seconds, tmax, counter_id);
    }, 1000)
    }
}

function Start(start_id, stop_id, work_id, rest_id, time, audio_id, counter_id) {
    console.log("Start");

    document.getElementById(start_id).disabled = true;
    document.getElementById(work_id).disabled = true;
    document.getElementById(rest_id).disabled = true;

    document.getElementById(start_id).style.display = "none";
    document.getElementById(stop_id).style.display = "block";
    document.getElementById(work_id).style.display = "none";
    document.getElementById(rest_id).style.display = "none";

    document.getElementById(counter_id).style.marginTop = "10%";

    tmax = document.getElementById(time).value;
    Counting(tmax, counter_id, audio_id)
}

function Stop(start_id, stop_id, work_id, rest_id, audio_id, counter_id) {
    console.log("Stop");

    finished = true;
    clearInterval(funcao_contagem);

    document.getElementById(start_id).disabled = false;
    document.getElementById(work_id).disabled = false;
    document.getElementById(rest_id).disabled = false;
    
    document.getElementById(start_id).style.display = "block";
    document.getElementById(stop_id).style.display = "none";
    document.getElementById(work_id).style.display = "inline";
    document.getElementById(rest_id).style.display = "inline";

    document.getElementById(counter_id).style.marginTop = "2.4%";

    document.getElementById(audio_id).pause();
    document.getElementById(counter_id).innerHTML = '00:00';
}