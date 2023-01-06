import React, { useState } from 'react'

function CreateTask({addTask}) {

    const [userInput, setUserInput] = useState();
    
    const handleOnChange = (event) => {
        //console.log(event);
        setUserInput(event.currentTarget.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(userInput.trim() !== '') {
            addTask(userInput);
            setUserInput('');
        }
    }
    
  return (
    <div style={{margin:"20px"}}>
        <form onSubmit={handleSubmit}>
            <input type='text' value={userInput} onChange= {handleOnChange}/>
            <button>Add Task</button>
            
        </form>

    </div>
  )
}

export default CreateTask