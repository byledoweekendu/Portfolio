import {React, useState, useEffect, useContext} from 'react';
import { date } from './Reminder';
import clock from './clock.png';
import calendar from './calendar.png';
import cyclic from './cyclic.png';
import { options } from './Reminder';
import ReminderContext from './RemindersContext';

export default function TodayTasks(props) {

    const allReminders = JSON.parse(localStorage.getItem('reminders'));

    allReminders.forEach((item) => {
       item.creationDate = new Date(item.creationDate);
       item.deadline = new Date(item.deadline);
       item.remindEarlier = new Date(item.remindEarlier);
   })

   const option = props.option;
   const phrase = props.phrase;

   const contextFunctions = useContext(ReminderContext);

   const [reminders, setReminders] = useState([]);

   useEffect(() => {
    setReminders(allReminders.filter((item) => {
      if((item.name.includes(phrase) && option === 'Dzisiejsze' && item.deadline.toDateString() === date.toDateString() && item.isCompleted === 'Nie') || 
      (item.name.includes(phrase) && option === 'Dzisiejsze' && item.cyclicTask === "Codziennie" && item.deadline.toDateString() <= date.toDateString() && item.isCompleted === 'Nie') ||
      (item.name.includes(phrase) && option === 'Dzisiejsze' && item.deadline.getDay() === date.getDay() && item.cyclicTask === "Co tydzień" && item.deadline.getTime() <= date.getTime() && item.isCompleted === 'Nie') || 
      (item.name.includes(phrase) && option === 'Dzisiejsze' && item.deadline.getDate() === date.getDate() && item.cyclicTask === "Co miesiąc" && item.deadline.getTime() <= date.getTime() && item.isCompleted === 'Nie')){
        return allReminders;
      }
      }))
  }, []);

  return (
  <>
    {reminders.map((item) => {
          if(item.remindEarlier.toLocaleString() === "1.01.1970, 01:00:00" || item.remindEarlier.toLocaleString() === 'Invalid Date'){
            var convertRemind = item.remindEarlier; 
            convertRemind = 'Brak';
          }else{
              convertRemind = item.remindEarlier.toLocaleString("pl-PL", options);
          }
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
              color: "yellow"
            };
          }
            return(<ol style={style} key={item.id}>
              <span className = "id"><b>ID:</b> {item.id}</span> 
              <span className = "creationDate"><b>STWORZONE:</b> {item.creationDate.toLocaleString("pl-PL", options)}</span>
              <br/><br/> <img src={calendar} alt="Calendar"/> {convertDeadline}  
              <br/><br/><b>TYTUŁ:</b> {item.name} 
              <br/><br/><b>OPIS:</b> {convertDescription}
              <span className='cyclic'> <img src={cyclic} alt="Cyclic"/> {item.cyclicTask} </span>
              <span className='remindImg'> {convertRemind} <img src={clock} alt="Clock"/></span>
              <br/><br/>
              <section className="listButtons">
                <a href ="#formEdit"><button className="editTask" onClick={() => contextFunctions.getTaskToEdit(item.id)}>Edytuj</button></a>
                <a href ="#formRemind"><button className="setRemind" onClick={() => contextFunctions.getTaskToSetRemind(item.id)}>Przypomnij</button></a>
                <button className="removeTask" onClick={() => contextFunctions.removeTask(item.id)}>Usuń</button>
              </section>
          </ol>)
          }
        )}
   </>
  )
}