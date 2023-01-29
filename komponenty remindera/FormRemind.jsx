import {React, useState, useEffect} from 'react'
import moment from 'moment';

export default function FormRemind() {

  const allReminders = JSON.parse(localStorage.getItem('reminders'));
  const taskToSetRemind = JSON.parse(localStorage.getItem('taskToSetRemind'));

    taskToSetRemind.forEach((item) => {
        item.remindEarlier = new Date(item.remindEarlier);
    })

  const [idToSetRemind, setIdToSetRemind] = useState('');
  const [remindTime, setRemindTime] = useState('');

  useEffect(() => {
    taskToSetRemind.map((item) => {
        setIdToSetRemind(item.id);
        if(item.remindEarlier.toLocaleString() === "1.01.1970, 01:00:00" || item.remindEarlier.toLocaleString() === 'Invalid Date'){
          setRemindTime('');
        }else{
        setRemindTime(moment(item.remindEarlier).format('YYYY-MM-DDTHH:mm'));
        }
    })
  }, [])

  function setRemind(arr, element, remindEarlier){
    let index = arr.findIndex(reminder => reminder.id === element);
    arr[index] = {...arr[index], ...remindEarlier};
    return arr;
}

  const handleSubmit = (e) =>{
    e.preventDefault();
    setRemind(allReminders, idToSetRemind, {remindEarlier: remindTime});
    localStorage.setItem('reminders', JSON.stringify(allReminders));
    localStorage.removeItem('taskToSetRemind', JSON.stringify(taskToSetRemind));
    window.location.reload();
    window.scrollTo(0, 0);
}

  const handleReset = (e) =>{
    taskToSetRemind.map((item) => {
      setIdToSetRemind(item.id);
      if(item.remindEarlier.toLocaleString() === "1.01.1970, 01:00:00" || item.remindEarlier.toLocaleString() === 'Invalid Date'){
        setRemindTime('');
      }else{
      setRemindTime(moment(item.remindEarlier).format('YYYY-MM-DDTHH:mm'));
      }
    })
}

  const handleBack = (e) =>{
    localStorage.removeItem('taskToSetRemind', JSON.stringify(taskToSetRemind));
    window.location.reload();
    window.scrollTo(0, 0);
}
  
  return (
    <div id="formRemind">
         <span className="header">Ustaw przypomnienie</span>
         <label className="taskLabel">Czas przypomnienia:<input id="remindA" type="datetime-local" className="inputDate" value={remindTime} onChange={(e) => setRemindTime(e.target.value)} /></label>
         <i>Przypomnienie nie działa dla zadań nie cyklicznych po terminie lub bez terminu!</i>
         <section className="formButtons">
         <button id="sendFormRD" type="submit" value="submit" className="submit" onClick={handleSubmit}>Zapisz</button>
         <button id="resetFormRD" type="reset" className="reset" onClick={handleReset}>Reset</button>
         <button id="backR" className="btnB" onClick={handleBack}>Powrót</button>
         </section>
    </div>
  )
}
