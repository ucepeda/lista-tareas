import React from 'react'

function TaskItem({task, onComplete, onDeleteItem}) {

    const getStyle = () => {
        return {
            textDecoration: task.isCompleted ? 'line-through' : 'none',
            margin: '20px',
            border: '1px solid #ffffff',
            backgroundColor: '#CCF7E3'
        }
    }

  return (
    <div style = {getStyle()}>
        <input type='checkbox' checked={task.isCompleted} 
        onChange= {() => onComplete(task.id)} />
        {task.task}
        <button className='add-btn' onClick={() => onDeleteItem(task.id)}>X</button>
    </div>
  )
}

export default TaskItem;