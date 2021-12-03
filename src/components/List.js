import React from "react";
import ToDoItem from "./ToDoItem";

function List ({toDoItems, remove, edit})  {

    return(
        <div>
            {toDoItems.map((toDoItem) => {
                return (
                    <ToDoItem edit={edit}
                    remove={remove}  
                    key={toDoItem.id} 
                    item={toDoItem} />
                )
            }
            )}
        </div>
    )
}

export default List;