 const timerDisplay = document.querySelector('#timerDisplay')
 const startbtn= document.getElementById('start')
 const stopbtn = document.getElementById('stop')
 const resetbtn  = document.getElementById('reset')

 let msec = 0;
 let sec = 0;
 let min = 0;
 let hours = 0;
 
 let timerId = null;

 startbtn.addEventListener('click', function(){
    if(timerId !==null){
        clearInterval(timerId)
     }
     timerId = setInterval(starttimer, 10);
      
 })
 stopbtn.addEventListener('click', function(){
    clearInterval(timerId)
 })
 resetbtn.addEventListener('click', function(){
    clearInterval(timerId)
    timerDisplay.innerHTML = `00 : 00 : 00 : 00`;
    msec = sec = min = hours = 0;
 });
 
 function starttimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        sec++;
        if(sec == 60 ){
            sec = 0;
            min++;
        }
        if(min == 60){
            min = 0;
            hours++;
        }
    }
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;
    let hourString = min < 10 ? `0${hours}` : hours;
    timerDisplay.innerHTML = ` ${hourString} : ${minString} : ${secString} : ${msecString} `;
 }