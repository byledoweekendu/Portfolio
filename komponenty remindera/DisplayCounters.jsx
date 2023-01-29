import {React, useState, useEffect} from 'react'
import { date } from './Reminder';

export default function DisplayCounters() {

  const allReminders = JSON.parse(localStorage.getItem('reminders'));

  allReminders.forEach((item) => {
    item.deadline = new Date(item.deadline);
    })

  const [countToday, setCountToday] = useState('');
  const [countImportant, setCountImportant] = useState('');
  const [countAll, setCountAll] = useState('');

  useEffect(() => {
    setCountToday(allReminders.filter((item) => {
      if((item.deadline.toDateString() === date.toDateString() && item.isCompleted === 'Nie')|| 
      (item.cyclicTask === "Codziennie" && item.deadline.getTime() <= date.getTime() && item.isCompleted === 'Nie') ||
      (item.deadline.getDay() === date.getDay() && item.cyclicTask === "Co tydzień" && item.deadline.getTime() <= date.getTime() && item.isCompleted === 'Nie')
      || (item.deadline.getDate() === date.getDate() && item.cyclicTask === "Co miesiąc" && item.deadline.getTime() <= date.getTime()) && item.isCompleted === 'Nie'){
          return allReminders;
      }}).length)
  }, [countToday])

  useEffect(() => {
    setCountImportant(allReminders.filter((item) => {
      if(item.isImportant === "Tak" && item.isCompleted === 'Nie'){
          return allReminders;
      }}).length)
  }, [countImportant])
  
  useEffect(() => {
    setCountAll(allReminders.length)
  }, [countAll])

  return (
    <div className="displayCounters">
        <div id="today" className="display"><span className="header">Dzisiejsze:</span><p id="counterToday">{countToday}</p></div>
        <div id="important" className="display"><span className="header">Ważne:</span><p id="counterImportant">{countImportant}</p></div>
        <div id="scheduled" className="display"><span className="header">Wszystkie:</span><p id="counter">{countAll}</p></div>
    </div>
  )
}
