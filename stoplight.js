const showSeconds = false;
const greenHour = 7;
const greenMinute = 0;
const redHour = 20;
const redMinute = 0;
const yellowHour = 6;
const yellowMinute = 50;

function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let ampm = "AM";
  const bodyElement = document.getElementById("body");

  redLight(hour, minute) ? (
    bodyElement.classList.add('red'),
    bodyElement.classList.remove('green'),
    bodyElement.classList.remove('yellow')
  ) : yellowLight(hour, minute) ? (
    bodyElement.classList.add('yellow'),
    bodyElement.classList.remove('green'),
    bodyElement.classList.remove('red')
  ) : (
    bodyElement.classList.add('green'),
    bodyElement.classList.remove('red'),
    bodyElement.classList.remove('yellow')
  );

  if(hour == 0){
      hour = 12;
  }
  if(hour > 12){
      hour = hour - 12;
      ampm = "PM";
   }

  minute = (minute < 10) ? `0${minute}` : minute;
  second = (second < 10) ? `0${second}` : second;
  
  let time = `${hour}:${minute}${showSeconds ? `:${second}` : ''} ${ampm}`;
  document.getElementById("clock").innerText = time; 

  let t = setTimeout(function(){ currentTime() }, showSeconds ? 1000 : 60000);
}

const redLight = (hour, minute) => {
  if (hour < greenHour) return true;
  if (hour == greenHour && minute < greenMinute) return true;
  if (hour > redHour) return true;
  if (hour == redHour && minute >= redMinute) return true;
  return false;
};

const yellowLight = (hour, minute) => {
  return (hour == yellowHour && minute >= yellowMinute) ? true : false;
};
