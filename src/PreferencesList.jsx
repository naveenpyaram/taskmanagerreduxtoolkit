import React from 'react'
import { toggleTheme , sorted , completed } from './redux/preferenceSlice'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const PreferencesList = () => {
  const dispatch = useDispatch();
  const preferences = useSelector(state => state.preferences);
  return (
    <div className="mb-4 p-4 border rounded">
      <h2 className="font-bold mb-2">Preferences</h2>
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch(toggleTheme())}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          Toggle Theme ({preferences.theme})
        </button>
        <select
          value={preferences.sortBy}
          onChange={(e) => dispatch(sorted(e.target.value))}
          className="px-2 py-1 border rounded"
        >
          <option value="createdAt">Sort by Date</option>
          <option value="text">Sort by Text</option>
        </select>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={preferences.showCompleted}
            onChange={() => dispatch(completed())}
            className="mr-2"
          />
          Show Completed Tasks
        </label>
      </div>
    </div>
  )
}

export default PreferencesList
