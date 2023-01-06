import React from 'react'
import TaskItem from './TaskItem';

function TaskList({tasks, onComplete, onDeleteItem}) {
  return (
    <div>
        {
            tasks.map((task, index) => {
                return <TaskItem key ={`task-${index}`} task = {task} onComplete = {onComplete} onDeleteItem = {onDeleteItem} />
            })
        }
    </div>
  )
}

export default TaskList;
