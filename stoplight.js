const showSeconds = false;
const greenHour = 7;
const greenMinute = 0;
const redHour = 20;
const redMinute = 0;
const yellowHour = 6;
const yellowMinute = 50;
const defaultData = {
  title: "ADA & KORA STOPLIGHT",
  timers: [
    {
      name: "Green Light",
      color: "rgba(0, 128, 0, 0.722)",
      time: new Date().setHours(17,0,0,0),
      start: {
        hour: 7,
        minute: 0
      }
    },
    {
      name: "Yellow Light",
      color: "rgb(255, 166, 0)",
      time: new Date().setHours(16,58,0,0),
      start: {
        hour: 6,
        minute: 50
      }
    },
    {
      name: "Red Light",
      color: "rgba(255, 0, 0, 0.728)",
      time: new Date().setHours(16,59,0,0),
      start: {
        hour: 20,
        minute: 0
      }
    }
  ]
}
let stopLightDate = {};

function readLocalStorage(){
  // Reading data from localStorage 
  const value = localStorage.getItem('key'); 
  // Reading an object from localStorage (requires parse)
  stopLightData = JSON.parse(localStorage.getItem('stopLightData'));
  console.log("stopLightData: ", stopLightData);
  if(stopLightData !== null){

  } else {
    stopLightData = {...defaultData};
  }
  setTitle(stopLightData.title);

  const form = document.getElementById("myForm");
  const submitButton = form.querySelector('button[type="submit"]'); 


  stopLightData.timers.forEach((timer, index) => {

    const timerName = document.createElement("input");
    const timerNameLabel = document.createElement('label');
    timerNameLabel.textContent = "Name:";

    timerName.type = "text";
    timerName.name = "timerName";
    timerName.id = `timer-name-${index}`;
    timerName.placeholder = "Enter your timer name";
    timerName.value=timer.name;

    const timerTime = document.createElement("input");
    const timerTimeLabel = document.createElement('label');
    timerTimeLabel.textContent = "Time:";

    timerTime.type = "text";
    timerTime.name = "timerTimeName";
    timerTime.id = `timer-time-${index}`;
    timerTime.placeholder = "Enter your time";
    timerTime.value=timer.time;
    
    const timerColor = document.createElement("input");
    const timerColorLabel = document.createElement('label');
    timerColorLabel.textContent = "Color:";

    timerColor.type = "text";
    timerColor.name = "timerColorName";
    timerColor.id = `timer-color-${index}`;
    timerColor.placeholder = "Enter your color";
    timerColor.value=timer.color;

    form.insertBefore(timerNameLabel, submitButton);
    form.insertBefore(timerName, submitButton);
    form.insertBefore(timerTimeLabel, submitButton);
    form.insertBefore(timerTime, submitButton);
    form.insertBefore(timerColorLabel, submitButton);
    form.insertBefore(timerColor, submitButton);
  });
};

function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let ampm = "AM";
  const bodyElement = document.getElementById("body");

  // Sort events by time in descending order
  stopLightData.timers.sort((a, b) => b.time - a.time);

  // Get the most recent event that has passed
  const now = new Date();
  const mostRecentPastEvent = stopLightData.timers.find(timer => timer.time < now);

  console.log(mostRecentPastEvent);
  // Get the element you want to change
  const body = document.getElementById("body"); 

  // Set the color property
  body.style.background = mostRecentPastEvent.color;

  // yellowLight(hour, minute) ? (
  //   bodyElement.classList.add('yellow'),
  //   bodyElement.classList.remove('green'),
  //   bodyElement.classList.remove('red')
  // ) : redLight(hour, minute) ? (
  //   bodyElement.classList.add('red'),
  //   bodyElement.classList.remove('green'),
  //   bodyElement.classList.remove('yellow')
  // ) : (
  //   bodyElement.classList.add('green'),
  //   bodyElement.classList.remove('red'),
  //   bodyElement.classList.remove('yellow')
  // );

  if(hour == 0){
      hour = 12;
  }
  if(hour >= 12){
      hour = hour - 12;
      ampm = "PM";
   }

  minute = (minute < 10) ? `0${minute}` : minute;
  second = (second < 10) ? `0${second}` : second;
  
  let time = `${hour}:${minute}${showSeconds ? `:${second}` : ''} ${ampm}`;
  document.getElementById("clock").innerText = time; 

  let t = setTimeout(function(){ currentTime() }, showSeconds ? 1000 : 60000);
};

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

const setTitle = (title) => {
  const titleElement = document.getElementById("title");
  titleElement.innerHTML = title;

}

function start() {
  readLocalStorage();
  currentTime();
}