import {React, useState} from 'react'
import { date } from './Reminder';

export default function FormAdd() {

    const allReminders = JSON.parse(localStorage.getItem('reminders'));

    const id = Math.round(Math.random()*999999);
    const creationDate = date;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [cyclic, setCyclic] = useState('Nie Cykliczne');
    const [important, setImportant] = useState('Nie');
    const isCompleted = 'Nie';
    const remindEarlier = null;

    function addTask(arr, name, description, deadline, cyclicTask, isImportant){
        arr.push({id, creationDate, name, description, deadline, cyclicTask, isCompleted, isImportant, remindEarlier});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTask(allReminders, title, description, deadline, cyclic, important);
        localStorage.setItem('reminders', JSON.stringify(allReminders));
        window.location.reload();
        window.scrollTo(0, 0);
    }

    const handleReset = (e) =>{
        setTitle('');
        setDescription('');
        setDeadline('');
        setCyclic('');
        setImportant('');
    }

    const handleBack = (e) =>{
        window.scrollTo(0, 0);
        setTitle('');
        setDescription('');
        setDeadline('');
        setCyclic('');
        setImportant('');
    }

    return (
        <div id="formAdd">
            <span className="header">Dodaj zadanie</span>
            <input id="titleA" type="text" placeholder="Nazwa zadania" className="input" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea id="descriptionA" placeholder="Opis zadania" className="textarea" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <label className="taskLabel">Ustaw termin:<input id="deadlineA" type="datetime-local" className="inputDate" value={deadline} onChange={(e) => setDeadline(e.target.value)}/></label>
            <label className="taskLabel">Zadanie cykliczne:<select id="cyclicA" className="checklist" value={cyclic} onChange={(e) => setCyclic(e.target.value)}><option>Nie cykliczne</option><option>Codziennie</option><option>Co tydzień</option><option>Co miesiąc</option></select></label>
            <label className="taskLabel">Zadanie ważne:<select id="importantA" className="checklist" value={important} onChange={(e) => setImportant(e.target.value)}><option>Nie</option><option>Tak</option></select></label>
            <section className="formButtons">
            <button id="sendForm" className="submit" type="submit" disabled={!title} onClick={handleSubmit}>Zapisz</button>
            <button id="resetFormA" type="reset" className="reset" onClick={handleReset}>Reset</button>
            <button id="backA" className="btnB" onClick={handleBack}>Powrót</button>
            </section>
        </div>
    )
}
