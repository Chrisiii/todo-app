import React from "react";
import ToDoItem from "./ToDoItem";

class List extends React.Component {

    render(){
        return(
            <div>
                {this.props.toDoItems.map((toDoItem) => 
                    <ToDoItem edit={this.props.edit}
                    remove={this.props.remove}  
                    key={toDoItem.id} 
                    item={toDoItem} />
                )}
            </div>
        )
    }
}

export default List;