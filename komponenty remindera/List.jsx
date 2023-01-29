import {React, useState} from 'react';
import AllTasks from './AllTasks';
import TodayTasks from './TodayTasks';
import NotCompletedTasks from './NotCompletedTasks';
import CompletedTasks from './CompletedTasks';
import ImportantTasks from './ImportantTasks';
import CyclicTasks from './CyclicTasks';
import SearchedTasks from './SearchedTasks';
import SearchedTodaysTasks from './SearchedTodaysTasks';
import SearchedNotCompletedTasks from './SearchedNotCompletedTasks';
import SearchedCompletedTasks from './SearchedCompletedTasks';
import SearchedImportantTasks from './SearchedImportantTasks';
import SearchedCyclicTasks from './SearchedCyclicTasks';
import ReminderContext from './RemindersContext';

export default function List() {

  const allReminders = JSON.parse(localStorage.getItem('reminders'));

  allReminders.forEach((item) => {
     item.creationDate = new Date(item.creationDate);
     item.deadline = new Date(item.deadline);
     item.remindEarlier = new Date(item.remindEarlier);
 })

  const [option, setOption] = useState('Wszystkie');
  const [phrase, setPhrase] = useState('');  
  const [listType, setListType] = useState(1);

  const handleReset = (e) =>{
    setPhrase('');
    setOption('Wszystkie');
}

function getTaskToEdit(id){
  const taskToEdit = allReminders.filter((item) => item.id === id)
  localStorage.setItem('taskToEdit', JSON.stringify(taskToEdit));
  window.location.reload();
}

function getTaskToSetRemind(id){
  const getTaskToSetRemind = allReminders.filter((item) => item.id === id)
  localStorage.setItem('taskToSetRemind', JSON.stringify(getTaskToSetRemind));
  window.location.reload();
}

function removeTask(id){
  const updatedReminders = allReminders.filter((item) => item.id !== id)
  localStorage.setItem('reminders', JSON.stringify(updatedReminders));
  window.location.reload();
  window.scrollTo(0, 450);
}

const functions = {getTaskToEdit, getTaskToSetRemind, removeTask};
  
  return (
    <>
    <section className="search">
        <input id="field" type="text" name="search" placeholder="Wyszukaj zadanie" value={phrase} onChange={(e) => setPhrase(e.target.value)} />
        <label className='searchOptions'><select id="importantA" className="checklistInside" value={option} onChange={(e) => setOption(e.target.value)}>
        <option>Wszystkie</option><option>Dzisiejsze</option><option>Nieukończone</option><option>Ukończone</option><option>Ważne</option><option>Cykliczne</option></select></label>
        <button id="reset" type="submit" className="reset" onClick={handleReset}>Reset</button>
        <a href ="#formAdd" className="btnO">+ Dodaj zadanie</a>
    </section>   
    <nav>
        <button id="allTasks" className="btn" onClick={() => setListType(1)}>Wszystkie zadania</button>
        <button id="todayTasks" className="btn" onClick={() => setListType(2)}>Dzisiejsze zadania</button>
        <button id="notCompletedTask" className="btn" onClick={() => setListType(3)}>Nieukończone zadania</button>
        <button id="completedTask" className="btn" onClick={() => setListType(4)}>Ukończone zadania</button>
        <button id="importantTask" className="btn" onClick={() => setListType(5)}>Ważne zadania</button>
        <button id="cyclicTask" className="btn" onClick={() => setListType(6)}>Cykliczne zadania</button>
    </nav>
    <ul id="list">
      <span className="header"><br/>Zadania:</span>
      <ReminderContext.Provider value = {functions}>
      {listType === 1 && phrase === '' && <AllTasks/>}
      {listType === 2 && phrase === '' && <TodayTasks/>}
      {listType === 3 && phrase === '' && <NotCompletedTasks/>}
      {listType === 4 && phrase === '' && <CompletedTasks/>}
      {listType === 5 && phrase === '' && <ImportantTasks/>}
      {listType === 6 && phrase === '' && <CyclicTasks/>}
      {phrase !== '' && option === 'Wszystkie' && <SearchedTasks phrase={phrase} option={option}/>}
      {phrase !== '' && option === 'Dzisiejsze' && <SearchedTodaysTasks phrase={phrase} option={option}/>}
      {phrase !== '' && option === 'Nieukończone' && <SearchedNotCompletedTasks phrase={phrase} option={option}/>}
      {phrase !== '' && option === 'Ukończone' && <SearchedCompletedTasks phrase={phrase} option={option}/>}
      {phrase !== '' && option === 'Ważne' && <SearchedImportantTasks phrase={phrase} option={option}/>}
      {phrase !== '' && option === 'Cykliczne' && <SearchedCyclicTasks phrase={phrase} option={option}/>}
      </ReminderContext.Provider>
    </ul>
    </>
  )
}