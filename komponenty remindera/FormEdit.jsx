import {React, useState, useEffect} from 'react'
import moment from 'moment';

export default function FormEdit() { 

    const allReminders = JSON.parse(localStorage.getItem('reminders'));
    const taskToEdit = JSON.parse(localStorage.getItem('taskToEdit'));

    taskToEdit.forEach((item) => {
        item.deadline = new Date(item.deadline);
    })

    const [idToEdit, setIDToEdit] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [cyclic, setCyclic] = useState('Nie Cykliczne');
    const [important, setImportant] = useState('Nie');
    const [completed, setCompleted] = useState('Nie');

    useEffect(() => {
        taskToEdit.map((item) => {
            setIDToEdit(item.id);
            setTitle(item.name);
            setDescription(item.description);
            if(item.deadline.toLocaleString() === "1.01.1970, 01:00:00" || item.deadline.toLocaleString() === 'Invalid Date'){
                setDeadline('');
              }else{
              setDeadline(moment(item.deadline).format('YYYY-MM-DDTHH:mm'));
            }
            setCyclic(item.cyclicTask);
            setImportant(item.isImportant);
            setCompleted(item.isCompleted);
        })
      }, [])

    function editTask(arr, element, name, description, deadline, cyclicTask, isImportant, isCompleted){
        let index = arr.findIndex(reminder => reminder.id === element);
        arr[index] = {...arr[index], ...name, ...description, ...deadline, ...cyclicTask, ...isImportant, ...isCompleted};
        return arr;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        editTask(allReminders, idToEdit, {name: title, description: description, deadline: deadline, cyclicTask: cyclic, isImportant: important, isCompleted: completed});
        localStorage.setItem('reminders', JSON.stringify(allReminders));
        localStorage.removeItem('taskToEdit', JSON.stringify(taskToEdit));
        window.location.reload();
        window.scrollTo(0, 0);
    }

    const handleReset = (e) =>{
        taskToEdit.map((item) => {
            setIDToEdit(item.id);
            setTitle(item.name);
            setDescription(item.description);
            if(item.deadline.toLocaleString() === "1.01.1970, 01:00:00" || item.deadline.toLocaleString() === 'Invalid Date'){
                setDeadline('');
              }else{
              setDeadline(moment(item.deadline).format('YYYY-MM-DDTHH:mm'));
            }
            setCyclic(item.cyclicTask);
            setImportant(item.isImportant);
            setCompleted(item.isCompleted);
        })
    }

    const handleBack = (e) =>{
        localStorage.removeItem('taskToEdit', JSON.stringify(taskToEdit));
        window.location.reload();
        window.scrollTo(0, 0);
    }

  return (
    <div id="formEdit">
            <span className="header">Edytuj zadanie</span>
            <p className ='descriptions'>Nowa nazwa:</p>
            <input id="titleE" type="text" className="input" value={title} onChange={(e) => setTitle(e.target.value)} />
            <p className ='descriptions'>Nowy opis:</p>
            <textarea id="descriptionE" className="textarea" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <label className="taskLabel">Nowy termin:<input id="deadlineE" type="datetime-local" className="inputDate" value={deadline} onChange={(e) => setDeadline(e.target.value)}/></label>
            <label className="taskLabel">Zadanie cykliczne:<select id="cyclicE" className="checklist" value={cyclic} onChange={(e) => setCyclic(e.target.value)}><option>Nie cykliczne</option><option>Codziennie</option><option>Co tydzień</option><option>Co miesiąc</option></select></label>
            <label className="taskLabel">Zadanie ważne:<select id="importantE" className="checklist" value={important} onChange={(e) => setImportant(e.target.value)}><option>Nie</option><option>Tak</option></select></label>
            <label className="taskLabel">Zadanie wykonane:<select id="completed" className="checklist" value={completed} onChange={(e) => setCompleted(e.target.value)}><option>Nie</option><option>Tak</option></select></label>
            <section className="formButtons">
              <button id="editForm6" type="submit" value="submit" className="submit" onClick={handleSubmit}>Zapisz</button>
              <button id="resetForm0" type="reset" className="reset" onClick={handleReset}>Reset</button>
              <button id="backE" className="btnB" onClick={handleBack}>Powrót</button>
            </section>
    </div>
  )
}
