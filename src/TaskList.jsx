import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask,deleteTask } from './redux/taskslice';
const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const { showCompleted, sortedBy } = useSelector(state => state.preferences);
  const theme = useSelector(state => state.preferences.theme);
  const filteredTasks = tasks.filter(task => 
    showCompleted ? true : !task.completed
  );

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortedBy === 'createdAt') {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    return a.text.localeCompare(b.text);
  });
  return (
    <div className={`mt-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'}`}>
    {sortedTasks.map(task => (
      <div key={task.id} className="flex items-center p-2 border-b">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(toggleTask(task.id))}
          className="mr-2"
        />
        <span className={task.completed ? 'line-through' : ''}>
          {task.text}
        </span>
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="ml-auto text-red-500"
        >
          Delete
        </button>
      </div>
    ))}
  </div>
  )
}

export default TaskList
