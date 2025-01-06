import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AddTask from './AddTask';
import TaskList from './TaskList';
import PreferencesList from './PreferencesList';
function App() {
  return (
    <Provider store={store}>
      <div className='p-4 flex flex-col justify-center '>
        <h1 className='text-2xl font-bold  text-center mb-6'>Task Manager</h1>
        <PreferencesList></PreferencesList>
        <AddTask></AddTask>
        <TaskList></TaskList>
      </div>
    </Provider>
     
    
  )
}

export default App
