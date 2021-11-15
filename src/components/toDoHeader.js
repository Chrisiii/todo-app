import React from 'react';

class ToDoHeader extends React.Component {
    
    render() {
        return (
            <div>
                <form id="form">
                <h2 id="h2"style={{color: "gray"}}>To Do List</h2>
                <input className='todo-input' type="text" value={this.props.toDoName} onChange={this.props.onChange} placeholder="What do you need to do?"/>
                <button className='todo-button' disabled={this.props.toDoName ? false : true} onClick={this.props.add }>Add</button>
                </form>
            </div>
        )
    }
}

export default ToDoHeader