import React, { useState } from 'react'

function ToDoList() {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    function handleInputChange(e) {
        setNewTask(e.target.value)

    }

    function addTask() {
        if(newTask.trim() !== '' && newTask.length < 25){
            setTasks(t =>[...t, newTask])
            setNewTask('')
        }

    }

    function removeTask(index) {
        setTasks(tasks.filter((_,i) => i !== index))

    }

    function moveTaskUp(index) {

        if (index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)

        }

    }

    function moveTaskDown(index) {

        if (index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks)

        }

    }

  return (
    <div className='to-do-list'>
        <h2>To Do List</h2>

        <input  
                type='text'
                placeholder='Add a task...'
                value={newTask}
                onChange={handleInputChange}/>
            <button className='add-button' onClick={addTask}>Add</button>

        <div className='tasks'>



        <ul>{tasks.map((task,index) => 
            <li key={index}>
                <span className='text'>{task}</span>
                <button onClick={ () => removeTask(index)} className='delete'>Delete</button>
                <button onClick={ () => moveTaskUp(index)} className = 'move-button up' >⬆</button>
                <button onClick={ () => moveTaskDown(index)} className='move-button down'>⬇</button>
            </li>)}
        </ul>

 

        </div>

    </div>
  );
}

export default ToDoList