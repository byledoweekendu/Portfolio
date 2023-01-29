import React from 'react';
import DisplayCounters from './DisplayCounters';
import Remind from './Remind';
import List from './List';
import FormAdd from './FormAdd';
import FormRemind from './FormRemind';
import FormEdit from './FormEdit';

export const date = new Date();

export const options = {
  weekday: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric", 
  hour: 'numeric', 
  minute: 'numeric'
};

export default function Reminder() {

  if(localStorage.getItem('reminders') == null){
  localStorage.setItem('reminders', '[]');
  }

  if(localStorage.getItem('taskToEdit') == null){
  localStorage.setItem('taskToEdit', '[]');
  }

  if(localStorage.getItem('taskToSetRemind') == null){
  localStorage.setItem('taskToSetRemind', '[]');
  }

  return (
    <div id="content">
      <DisplayCounters/>
      <Remind/>
      <List/>
      <FormAdd/>
      <FormRemind/>
      <FormEdit/>
    </div>
  )
}