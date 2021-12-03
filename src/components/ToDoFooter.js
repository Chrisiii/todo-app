import React from "react";

function ToDoFooter (props) {

    return(
        <div>
            <span id="lengt">{props.toDoItems.filter((todo) => todo.done).length}/</span>
            <span id="secondLength">{props.toDoItems.length} tasks left</span>
            <button className="clearAll" onClick={props.completed}>Clear Completed</button>
        </div>
    )
}

export default ToDoFooter