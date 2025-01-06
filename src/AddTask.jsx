import React, { useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from './redux/taskslice'
const AddTask = () => {
  const [taskText,setTaskText] = useState('');
const dispatch = useDispatch();
const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(addTask(taskText));
  setTaskText('');
}
  return (
    <div>
       <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
        className="flex-1 px-3 py-2 border rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Add
      </button>
    </form>
    </div>
  )
}

export default AddTask
