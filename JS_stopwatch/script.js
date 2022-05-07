window.onload = function(){
    var seconds = 0;
    var tens = 0;
    var appendTens=
    document.getElementById("tens");
    var appendSec =
    document.getElementById("seconds");
    var startButton=
    document.getElementById("start");
    var resetButton =
    document.getElementById("reset");
    var stopButton =
    document.getElementById("stop");

    var interval;

    startButton.onclick =function(){
        clearInterval(interval);
        interval=setInterval(startTimer,10);

    }
    stopButton.onclick = function(){
        clearInterval(interval);
    }
    resetButton.onclick =function(){
        tens="00";
        secs="00";
        appendSec.innerHTML=secs;
        appendTens.innerHTML = tens;
    }

    function startTimer(){
        tens++
        if(tens<=9){
            appendTens.innerHTML="0"+tens;

        }
       if (tens>9){
           appendTens.innerHTML=tens;
       }
       if (tens>99){
           console.log(seconds);
           seconds++
           appendSec.innerHTML="0"+seconds;
           tens=0;
           appendTens.innerHTML="0"+ 0; 
       }
      if(seconds > 9){
  appendSec.innerHTML=seconds;
   }

    }
 
}