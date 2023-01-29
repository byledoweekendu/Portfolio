import {React, useState, useEffect} from 'react';
import { options } from './Reminder';

export default function Remind() {

  const allReminders = JSON.parse(localStorage.getItem('reminders'));
  
  allReminders.forEach((item) => {
    item.deadline = new Date(item.deadline);
    item.remindEarlier = new Date(item.remindEarlier);
})

const [reminds, setReminds] = useState([]);

useEffect(() => {
  const timer1 = setInterval(() => {
    const date = new Date();
    setReminds(allReminders.filter((item) => {
      if(item.remindEarlier.getTime() < date.getTime() && 
      (item.deadline.getTime() > date.getTime() || item.cyclicTask === "Codziennie" || item.cyclicTask === "Co tydzień" || item.cyclicTask === "Co miesiąc" ) && 
      item.isCompleted === "Nie" && item.remindEarlier.toLocaleString() !== "1.01.1970, 01:00:00" && item.remindEarlier.toLocaleString() !== 'Invalid Date'){
        return allReminders;
      }
      }))
  }, 1000)
  return () => clearInterval(timer1);
}, []);

  return (
    <div id ="remind">
        <span className="header">Przypomnienia:</span>
        {reminds.map((item) => {
          if(item.deadline.toLocaleString() === "1.01.1970, 01:00:00" || item.deadline.toLocaleString() === 'Invalid Date'){
            var convertDeadline = item.deadline;
            convertDeadline = 'Brak';
          }else{
            convertDeadline = item.deadline.toLocaleString("pl-PL", options);
          }
          if(item.description === ''){
            var convertDescription = item.description;
            convertDescription = 'Brak';
          }else{
            convertDescription = item.description;
          }
          if(item.isImportant === 'Tak'){
           var style = {
              color: "gold"
            };
          }
          return(<li style={style} key={item.id}><br/><b>TYTUŁ:</b> {item.name} <b>OPIS:</b> {convertDescription} <b>TERMIN:</b> {convertDeadline}</li>) 
        })}
    </div>
  )
}
