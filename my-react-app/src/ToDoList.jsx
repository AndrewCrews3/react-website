import React, { useState } from 'react'

function ToDoList() {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    function handleInputChange(e) {
        setNewTask(e.target.value)

    }

    function addTask() {
        if(newTask.trim() !== ''){
            setTasks(t =>[...t, newTask])
            setNewTask('')
        }

    }

    function removeTask(index) {
        setTasks(tasks.filter((_,i) => i !== index))

    }

    function moveTaskUp(index) {

    }

    function moveTaskDown(index) {

    }


  return (
    <div className='to-do-list'>
        <h2>To Do List</h2>
        <div className='tasks'>

            <ul>{tasks.map((task,index) => 
            <li key={index}>{task}
            <button onClick={ () => removeTask(index)}>Delete</button>
            <button onClick={moveTaskUp} className = 'move-up'>Move Up</button>
            <button className='move-down'>Move Down</button></li>)}
            </ul>

            <input 
                type='text'
                placeholder='Add a task...'
                value={newTask}
                onChange={handleInputChange}/>
            <button className='add-button' onClick={addTask}>Add Task</button>
            <p>The task is to {newTask}</p>

        </div>

    </div>
  );
}

export default ToDoList