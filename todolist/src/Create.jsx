import React, { useState } from 'react'
import axios from 'axios'

function Create({ onTaskAdded }) {
  const [task, setTask] = useState('')

  const handleAdd = () => {
    if (task.trim() !== '') {
      axios.post('http://localhost:3001/add', { task: task })
        .then(result => {
          setTask('')  // Clear the input field after adding the task
          if (onTaskAdded) {
            onTaskAdded(result.data)  // Optionally notify the parent component
          }
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <div className='create_form'>
      <input 
        type="text" 
        placeholder='Enter Task' 
        value={task} 
        onChange={(e) => setTask(e.target.value)}
      />
      <button 
        type="button" 
        onClick={handleAdd} 
        disabled={task.trim() === ''}
      >
        Add
      </button>
    </div>
  )
}

export default Create
