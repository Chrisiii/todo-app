import React from 'react';

function ToDoHeader (props) {

    return (
        <div>
            <form id="form">
            <h2 id="h2"style={{color: "gray"}}>To Do List</h2>
            <input className='todo-input' 
            type="text" value={props.toDoName} 
            onChange={props.onChange} 
            placeholder="What do you need to do?"/>
            <button className='todo-button' 
            disabled={props.toDoName ? false : true} 
            onClick={props.add }>Add</button>
            </form>
        </div>
    )
}

export default ToDoHeader