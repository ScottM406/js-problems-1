//Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation,
//return a string of the form "7:00" indicating when the alarm clock should ring. Weekdays,
// the alarm should be "7:00" and on the weekend it should be "10:00".
// Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".

function alarmClock(day, vacation){
  if (vacation === true && day >= 1 && day <=5) return "10:00";
  else if (vacation === true && day === 0 || vacation === true && day === 6) return "off";
  else if (vacation === false && day === 0 || vacation === false && day === 6) return "10:00"
  else return "7:00"
}

console.timeLog(alarmClock(1, false));
console.timeLog(alarmClock(5, false));
console.timeLog(alarmClock(0, false));
console.timeLog(alarmClock(6, false));
console.timeLog(alarmClock(0, true));
console.timeLog(alarmClock(6, true));
console.timeLog(alarmClock(1, true));
console.timeLog(alarmClock(3, true));
console.timeLog(alarmClock(5, true));