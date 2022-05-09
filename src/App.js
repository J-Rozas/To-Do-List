import React, { useState } from 'react'
import './App.css';


function App() {

  const [tasks, setTasks] = useState([
    { name: 'Buy shopping', priority: 'high'},
    { name: 'Clean bathroom', priority: 'low'},
    { name: ' Car\'s MOT', priority: 'high'}
  ])

  const taskNodes = tasks.map((task, index) => {
    return (
      <li key={index}>
        {task.name}
      </li>
    )
  });

  const [newTask, setNewTask] = useState('');

  const handleTaskInput = (event) => setNewTask(event.target.value);

  const saveNewTask = (event) => {
    event.preventDefault();

    if (newTask === '') {
      return;
    }

    const copyTasks = [... tasks, {name: newTask, completed: false}];
    setTasks(copyTasks);
    setNewTask('');
  }


  return (
    <>
    <h1>
      ToDo's
    </h1>
    <form onSubmit={saveNewTask}>
    {/* Text input */}
      <input type='text' placeholder='Type in new task' name='next-task' onChange={handleTaskInput} value={newTask}></input>
      <label htmlFor='new-task'></label>

    <span>
      {/* First radio */}
      <input type='radio' name='priority' value='high'></input>
      <label htmlFor='high'>High</label>

      {/* Second radio */}
      <input type='radio' name='priority' value='low'></input>
      <label htmlFor='low'>Low</label>
    </span>

    {/* Submit button */}
      <input type='submit' value='Add task'></input>
    </form>
    <ul>
      { taskNodes }
    </ul>

    </>
  )
}

export default App;
