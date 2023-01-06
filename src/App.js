import { useState } from 'react';
import data from './data.json'
import './App.css';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';

function App() {

  const [tasks, setTasks] = useState(data);
  //console.log(tasks);

  const onComplete = (id) => {
    //console.log('task', id);

    setTasks(    
      tasks.map((task) => {
      return task.id === id ? {...task, isCompleted: !task.isCompleted} : {...task}
    }))
  }

  const onDeleteItem = (id) => {
    //console.log('delete', id);
    setTasks([...tasks].filter(task => task.id !== id));
  }

  const addTask = (newTask) => {
    //console.log('newTask', newTask);
    let taskAdd = {id : +new Date(), task: newTask, isCompleted: false}
    setTasks([...tasks, taskAdd]);
  }

  return (
    <div className="container">
      <CreateTask addTask={addTask}/>
      <TaskList tasks = {tasks} onComplete = {onComplete} onDeleteItem = {onDeleteItem}/>
    </div>
  );
}

export default App;
