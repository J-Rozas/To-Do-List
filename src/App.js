import React, { useState } from 'react'
import './App.css';


function App() {

  const [tasks, setTasks] = useState([
    { name: 'Buy shopping', completed: false},
    { name: 'Clean bathroom', completed: true},
    { name: ' Car\'s MOT', completed: false}
  ])

  const taskNodes = tasks.map((task, index) => {
    return (
      <li key={index}>
        {task.name}
      </li>
    )
  });

  return (
    <>
    <h1>
      ToDo's
    </h1>
    <form>
      <input type='text' placeholder='Type in new task' name='next-task' value={''}></input>
    </form>
    <ul>
      { taskNodes }
    </ul>

    </>
  )
}

export default App;
