const appendDay = document.querySelector('.day');
const appendDate = document.querySelector('.date');
const appendTime = document.querySelector('.time');
const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]
let interval;
const start = ()=>{
if(interval) return;
interval = setInterval(function(){
const formatDate= (date)=>{
    const dateObject = {
        year: date.getFullYear(),
        month: (date.getMonth()+1).toString().padStart(2,'0'),
        date: date.getDate().toString().padStart(2,'0'),
        hour: ((date.getHours()%12) || 12).toString().padStart(2,'0'),
        minute: date.getMinutes().toString().padStart(2,'0'),
        second: date.getSeconds().toString().padStart(2,'0'),
        amOrPm: date.getHours() < 12 ? 'AM' : 'PM',   
        day: date.getDay(), 
    }
    appendDay.innerText = `${weekday[dateObject.day]}`;
    appendTime.innerText = `${dateObject.hour}:${dateObject.minute}:${dateObject.second} ${dateObject.amOrPm}`;
    appendDate.innerText = `${dateObject.month}/${dateObject.date}/${dateObject.year}`
}
let myDate = new Date();
const myDateFormatted = formatDate(myDate);
},1000)
}
start();