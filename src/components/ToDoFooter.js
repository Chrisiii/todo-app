import React from "react";

class ToDoFooter extends React.Component {

    render(){
        return(
            <div>
                <span id="lengt">{this.props.toDoItems.filter((todo) => todo.done).length}/</span>
                <span id="secondLength">{this.props.toDoItems.length} tasks left</span>
                <button className="clearAll" onClick={this.props.completed}>Clear Completed</button>
            </div>
        )
    }
}

export default ToDoFooter