function currentTime() {
  const showSeconds = false;
  const wakeUpHour = 7;
  const wakeUpMin = 00;
  const sleepHour = 20;
  const snoozeMin = 10;
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let ampm = "AM";

  if(hh == 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      ampm = "PM";
   }

  (hh <= wakeUpHour && mm < wakeUpMin)|| hh > sleepHour ? (
    document.getElementById("body").classList.add('red'),
    document.getElementById("body").classList.remove('green'),
    document.getElementById("body").classList.remove('yellow')
  ):(
    document.getElementById("body").classList.add('green'),
    document.getElementById("body").classList.remove('red'),
    document.getElementById("body").classList.remove('yellow')
  );

  if(hh == wakeUpHour - 1 && mm >= 60 - snoozeMin){
    document.getElementById("body").classList.add('yellow');
    document.getElementById("body").classList.remove('green');
    document.getElementById("body").classList.remove('red');
  }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;
  
  let time = `${hh}:${mm}${showSeconds ? `:${ss}` : ''} ${ampm}`;
  document.getElementById("clock").innerText = time; 

  let t = setTimeout(function(){ currentTime() }, showSeconds ? 1000 : 60000);
}
